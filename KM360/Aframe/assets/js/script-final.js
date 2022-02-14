const sceneCenter = new THREE.Vector3(0, 0, 0);
const points = [
    {"x": 0, "y": 0, "name": "TBD", "area": -1, "active": true, "panorama": null, "north": 0},
    {"x": 0, "y": 1, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0},
    {"x": 0, "y": 2, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0},
    {"x": 0, "y": 3, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0},
    {"x": 0, "y": 4, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0}];
var activeRoom = 0;
var planImage = "";

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'hello (13).json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback

function createHead() {
    var template = document.createElement("script");
    template.setAttribute("id", "link")
    template.setAttribute("type", "text/html")
    template.innerHTML = "<a-entity class='link'geometry='primitive: plane; height: 0.5; width: 0.5'material='shader: flat; src:assets/icons/point10.svg; side: double;' material-alpha-test='800' rotation='0 0 0'id='${id}'event-set__mouseenter='scale: 1.2 1.2 1'event-set__mouseleave='scale: 1 1 1'proxy-event='event: click; to: #image-360; as: fade'sound='on: click; src: #click-sound'><a-text visible='false' false' id='${id}' color='#000' value='${name}' position='-0.1 0 0' rotation='0 0 0'></a-text></a-entity>"
    $("head").append(template);
    var material_test_script = document.createElement("script");
    material_test_script.innerHTML = "AFRAME.registerComponent('material-alpha-test', {dependencies: ['material'],init: function () {this.el.getObject3D('mesh').material.alphaTest = 0.77;}});"
    $("head").append(material_test_script);
    var rotation_reader_script = document.createElement("script")
    rotation_reader_script.innerHTML = "AFRAME.registerComponent('rotation-reader', {tick: function () {let rotation = this.el.object3D.rotation.y*(180/Math.PI);$('#compass').css({'transform':'rotate('+-1*rotation+'deg)'});for (let i = 0; i <= 5; i++) {$('#pointerParent'+i).css({'transform':'rotate('+-1*rotation+'deg)'});}}});"
    //$("head").append(rotation_reader_script);
}

function createBody() {
    var mainContainer = document.createElement("div")
    mainContainer.setAttribute("class", "container-fluid")
    mainContainer.setAttribute("id", "main-container")
    $("body").append(mainContainer);
}

function createScene() {
    var scene = document.createElement("a-scene")
    //scene.setAttribute("embedded", "")
    scene.setAttribute("do-something-once-loaded", "")
    scene.setAttribute("vr-mode-ui", false)
    scene.setAttribute("cursor", "rayOrigin:mouse")

    var infoBar = document.createElement("div")
    infoBar.setAttribute("class", "container-fluid px-0 info-panel text-center")
    var infoBarText = document.createElement("div")
    infoBarText.setAttribute("id", "room-now")
    infoBarText.setAttribute("class", "d-none")
    var roomName = document.createElement("div")
    roomName.setAttribute('class', 'd-flex flex-row justify-content-center align-items-center')
    roomName.setAttribute('style', 'gap:10px;')
    roomName.innerHTML = "<img class='d-block' src='assets/icons/room-bed-svgrepo-com.svg'width=16 height=16>"
    var roomNameSpan = document.createElement("span")
    roomNameSpan.setAttribute('id', 'room-now-name')
    roomName.appendChild(roomNameSpan)
    var roomSize = document.createElement("div")
    roomSize.setAttribute('class', 'd-flex flex-row justify-content-center align-items-center')
    roomSize.setAttribute('style', 'gap:10px;')
    var roomSizeSpan = document.createElement("span")
    roomSizeSpan.setAttribute('id', 'room-now-size')
    roomSize.innerHTML = "<img class='d-block' src='assets/icons/area-svgrepo-com.svg'width=16 height=16>"
    roomSize.appendChild(roomSizeSpan)
    infoBarText.appendChild(roomName)
    infoBarText.appendChild(roomSize)
    infoBar.appendChild(infoBarText);
    var infoBarSpan = document.createElement("div")
    infoBarSpan.setAttribute("class", "d-flex justify-content-center info-notch")
    infoBarSpan.innerHTML = "<div id='infoNotch' style='background-color:rgba(255,255,255,0.5); border-radius:0 0 20px 20px;padding:10px;'><img src='assets/icons/info-svgrepo-com.svg' class='d-block' height='16' width='16'></div>"
    infoBar.append(infoBarSpan)
    scene.append(infoBar);


    var assetContainer = document.createElement("a-assets");
    assetContainer.setAttribute("c", "");
    assetContainer.setAttribute("set-sky-once-loaded", "")
    var asset_clickSound = document.createElement("audio")
    asset_clickSound.setAttribute("id", "click-sound");
    asset_clickSound.setAttribute("crossorigin", "anonymous")
    asset_clickSound.setAttribute("src", "https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg")
    assetContainer.append(asset_clickSound)//todo:add images

    loadJSON(function (response) {
        // Do Something with the response e.g.
        jsonresponse = JSON.parse(response);
        planImage = jsonresponse[5].image;
        console.log(jsonresponse)
        $("#imagePreview").css("background-image", "url('" + planImage + "')")
        for (let i = 0; i <= 4; i++) {
            console.log(i + 1)
            points[i].x = jsonresponse[i].x;
            points[i].y = jsonresponse[i].y;
            points[i].name = jsonresponse[i].name;
            points[i].area = jsonresponse[i].size;
            points[i].panorama = jsonresponse[i].panorama;
            points[i].north = jsonresponse[i].north;
            //console.log(points[0])
            var panoramaImage = document.createElement("img");
            panoramaImage.setAttribute("src", jsonresponse[i].panorama);
            panoramaImage.setAttribute("id", "pointer" + i + "-image");
            panoramaImage.addEventListener("load", function (event) {
                if (event.target.id == "pointer0-image") {
                    console.log("fired")
                    document.querySelector('a-sky').setAttribute('src', points[0].panorama)
                    let rotationCamera = document.getElementById("image-360");
                    rotationCamera.setAttribute("rotation", "0 " + points[0].north + " 0")
                } else {
                    console.log(event.target.id + "loaded")
                }

            })
            assetContainer.append(panoramaImage);
            var id = "pointer" + i;
            var order = id.slice(-1);
            //console.log(points[order]);
            $("#" + id).css("top", points[order].y)
            $("#" + id).css("left", points[order].x)
        }
        activeRoom = 0;
        //$('#room-now').text(points[activeRoom].name + " Platība:" + points[activeRoom].area + "m2")
        $('#room-now-name').text(points[activeRoom].name);
        $('#room-now-size').text(points[activeRoom].area + "m2");
        var radius = 5;
        var offsetx = points[0].x;
        var offsety = points[0].y;
        for (let i = 0; i <= 4; i++) {
            if (i == 0) {
                var block = document.createElement('a-entity')
                block.setAttribute('class', 'linkEntity');
                block.setAttribute('data-id', i);
                block.setAttribute('id', 'link' + i);
                block.setAttribute('clickHandler');
                block.setAttribute('visible', 'false');
                block.setAttribute('template', 'src: #link');
                block.setAttribute('data-src', points[i].panorama);
                block.setAttribute('data-name', points[i].name);
                block.setAttribute('data-area', points[i].area);
                block.setAttribute('data-thumb', '#cubes-thumb');
                block.setAttribute('position', 0 + ' -10 ' + 0);
                block.setAttribute('look-at', '[camera]');
                scene.appendChild(block);
                continue
            }
            var relativeX = points[i].x - offsetx;
            var relativey = offsety - points[i].y;
            radius = Math.sqrt(relativeX * relativeX + relativey * relativey) / 100;
            var theta = Math.atan2(relativey, relativeX);
            var PositionX = radius * Math.cos(theta);
            var PositionZ = radius * Math.sin(theta) * -1;
            var block = document.createElement('a-entity')
            block.setAttribute('class', 'linkEntity');
            block.setAttribute('data-id', i);
            block.setAttribute('id', 'link' + i);
            block.setAttribute('clickHandler');
            block.setAttribute('visible', true);
            block.setAttribute('template', 'src: #link');
            block.setAttribute('data-src', points[i].panorama);
            block.setAttribute('data-name', points[i].name);
            block.setAttribute('data-area', points[i].area);
            block.setAttribute('data-thumb', '#cubes-thumb');
            block.setAttribute('position', PositionX + ' -1 ' + PositionZ);
            block.setAttribute('look-at', '[camera]');
            scene.appendChild(block);

        }


    });

    scene.append(assetContainer)
    var skyElement = document.createElement("a-sky")
    skyElement.setAttribute("b", "")
    skyElement.setAttribute("id", "image-360")
    skyElement.setAttribute("radius", "50")

    skyElement.setAttribute("src",)
    skyElement.setAttribute("sound", "on: change; src: #click-sound")
    skyElement.setAttribute("animation__fade", "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade")
    skyElement.setAttribute("animation__fadeback", "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade")
    skyElement.setAttribute("animation__custom", "property: material.color; from:#FFF;to:#000; startEvents:change; dur:300;")
    skyElement.setAttribute("animation__2", "property: material.color; from:#000;to:#FFF; startEvents: animationcomplete__custom; dur:300;")
    scene.append(skyElement);
    var rotationElement = document.createElement("a-entity")
    rotationElement.setAttribute("id", "camera-el")
    var cursorElement = document.createElement("a-entity")
    cursorElement.setAttribute("camera", "")

    //cursorElement.setAttribute("id", "camera-el")
    cursorElement.setAttribute("look-controls", "reverseMouseDrag: true")
    cursorElement.setAttribute("mouse-cursor", "")
    cursorElement.setAttribute("rotation-reader", "")
    var cursorElement2 = document.createElement("a-cursor")
    cursorElement2.setAttribute("id", "cursor")
    cursorElement2.setAttribute("animation__click", "property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150")
    cursorElement2.setAttribute("animation__fusing", "property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500")
    // cursorElement2.setAttribute("event-set__mouseenter", "_event: mouseenter; color: springgreen")
    // cursorElement2.setAttribute("event-set__mouseleave", "_event: mouseleave; color: black")
    cursorElement2.setAttribute("visible", false)
    cursorElement2.setAttribute("raycaster", "objects: .link")
    cursorElement.append(cursorElement2)
    rotationElement.appendChild(cursorElement);
    scene.append(rotationElement);
    $("body").append(scene);

}

function createPlan() {
    var scene = document.querySelector('a-scene');

    var flags = document.createElement("div")
    flags.setAttribute("id", "flags");
    var image_prev = document.createElement("div")
    image_prev.setAttribute("id", 'imagePreview')
    image_prev.setAttribute("class", 'css--image')
    //image_prev.setAttribute("style", 'background-image: url(Office_Room.svg);')
    image_prev.appendChild(flags);
    var photo_prev = document.createElement("div")
    photo_prev.setAttribute('class', 'css--photo-preview map-image')
    photo_prev.appendChild(image_prev);
    var plan_main = document.createElement('div')
    var expandBar = document.createElement("div")
    var footerBar = document.createElement("div")
    expandBar.setAttribute("class", "w-100 text-end px-2 py-2 position-relative");
    // expandBar.innerHTML = ""
    expandBar.innerHTML = "<button id='expandButton' class=' btn'><img class='d-block h-100' src='assets/icons/expand-svgrepo-com.svg'></button>" +
        "<div id='compassContainer'>" +
        "<svg width=\"80\" height=\"80\" viewBox=\"0 0 424 424\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M414.793 210.031C414.793 320.937 324.889 410.842 213.986 410.842C103.083 410.842 13.1795 320.937 13.1795 210.031C13.1795 99.1255 103.083 9.22137 213.986 9.22137C324.889 9.22137 414.793 99.1255 414.793 210.031Z\" stroke=\"black\" stroke-width=\"1.38488\"/>\n" +
        "<path d=\"M407.282 210.002C407.282 316.764 320.737 403.309 213.978 403.309C107.218 403.309 20.6732 316.764 20.6732 210.002C20.6732 103.24 107.218 16.6956 213.978 16.6956C320.737 16.6956 407.282 103.24 407.282 210.002Z\" stroke=\"black\" stroke-width=\"1.38485\"/>\n" +
        "<path d=\"M316.417 210.004C316.417 266.571 270.56 312.428 213.993 312.428C157.426 312.428 111.569 266.571 111.569 210.004C111.569 153.436 157.426 107.58 213.993 107.58C270.56 107.58 316.417 153.436 316.417 210.004V210.004Z\" stroke=\"#D3D7CF\" stroke-width=\"0.699996\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path d=\"M42.13 281.18L385.86 138.81Z\" fill=\"#D3D7CF\"/>\n" +
        "<path d=\"M42.13 281.18L385.86 138.81\" stroke=\"#D3D7CF\" stroke-width=\"0.7\"/>\n" +
        "<path d=\"M142.81 381.86L285.18 38.13Z\" fill=\"#D3D7CF\"/>\n" +
        "<path d=\"M142.81 381.86L285.18 38.13\" stroke=\"#D3D7CF\" stroke-width=\"0.7\"/>\n" +
        "<path d=\"M285.18 381.86L142.81 38.13Z\" fill=\"#D3D7CF\"/>\n" +
        "<path d=\"M285.18 381.86L142.81 38.13\" stroke=\"#D3D7CF\" stroke-width=\"0.7\"/>\n" +
        "<path d=\"M385.86 281.18L42.13 138.81Z\" fill=\"#D3D7CF\"/>\n" +
        "<path d=\"M385.86 281.18L42.13 138.81\" stroke=\"#D3D7CF\" stroke-width=\"0.7\"/>\n" +
        "<path d=\"M337.077 204.297C336.014 204.297 335.354 204.591 335.097 205.177C334.841 205.801 334.712 207.433 334.712 210.073V211.557C334.712 215.481 335.171 218.286 336.087 219.973C337.041 221.659 339.002 223.181 341.972 224.538V226.077L332.677 223.603V193.902H333.722C333.869 195.919 334.236 197.221 334.822 197.807C335.446 198.394 336.729 198.687 338.672 198.688H363.092C365.036 198.687 366.301 198.394 366.887 197.807C367.511 197.221 367.896 195.919 368.042 193.902H369.087V223.107L361.222 223.272V221.897C363.679 221.421 365.256 220.688 365.952 219.698C366.649 218.707 366.997 216.654 366.997 213.538V206.112C366.997 205.379 366.869 204.884 366.612 204.628C366.392 204.407 365.897 204.297 365.127 204.297H352.917V212.767C352.917 215.114 353.266 216.617 353.962 217.277C354.696 217.974 356.089 218.488 358.142 218.818V220.082H345.382V218.818C347.656 218.451 349.104 217.919 349.727 217.223C350.351 216.526 350.662 215.041 350.662 212.767V204.297H337.077\" fill=\"black\"/>\n" +
        "<path d=\"M59.6754 184.501H60.7204C61.0138 185.968 61.3805 186.976 61.8204 187.526C62.2604 188.04 63.1954 188.553 64.6254 189.066C72.8021 192.11 78.4124 194.163 81.4554 195.227C84.4987 196.29 89.5771 197.976 96.6904 200.286V201.112L73.4254 209.911L96.6904 218.382V219.207L67.1554 229.822C64.5888 230.738 62.9204 231.563 62.1504 232.297C61.3438 232.993 60.8671 234.057 60.7204 235.487H59.6754V222.012H60.7204C60.7938 223.405 60.9588 224.358 61.2154 224.871C61.4355 225.348 61.8571 225.586 62.4804 225.586C63.1404 225.586 63.9838 225.385 65.0104 224.982L85.6904 217.061L70.1804 211.177L65.6704 212.991C63.4704 213.872 62.1138 214.623 61.6004 215.246C61.0505 215.87 60.7571 216.97 60.7204 218.547H59.6754V203.862H60.7204C60.7571 206.685 61.3988 208.096 62.6454 208.096C63.0488 208.097 64.5338 207.602 67.1004 206.612L85.8554 199.352L67.2104 192.477C65.5604 191.89 64.1854 191.597 63.0854 191.596C62.3521 191.597 61.8204 191.89 61.4904 192.477C61.1238 193.027 60.8671 193.998 60.7204 195.392H59.6754V184.501\" fill=\"black\"/>\n" +
        "<path opacity=\"0.9\" d=\"M230.712 56.9423C229.685 57.0524 228.915 57.1807 228.402 57.3273C227.925 57.4374 227.411 57.7124 226.862 58.1523C226.348 58.5924 225.981 59.289 225.762 60.2423C225.578 61.159 225.486 62.4057 225.487 63.9823V92.9123H224.552L200.242 62.6623V84.2223C200.242 87.009 200.571 88.8606 201.232 89.7773C201.891 90.6573 203.285 91.1523 205.411 91.2623V92.3073H192.487V91.2623C194.76 91.1157 196.208 90.6207 196.832 89.7773C197.492 88.8973 197.822 87.0456 197.822 84.2223V59.9673C196.722 58.684 195.842 57.859 195.182 57.4923C194.558 57.1257 193.66 56.9424 192.487 56.9423V55.8973H201.892L223.066 82.5173V63.9823C223.066 61.1957 222.718 59.3807 222.022 58.5373C221.361 57.6574 219.95 57.1257 217.786 56.9423V55.8973H230.712V56.9423\" fill=\"black\"/>\n" +
        "<path d=\"M204.811 336.324C204.812 338.048 205.417 339.569 206.626 340.889C207.836 342.246 209.303 343.401 211.026 344.354C212.75 345.308 214.473 346.279 216.197 347.269C217.883 348.296 219.332 349.598 220.542 351.174C221.752 352.751 222.357 354.584 222.357 356.674C222.357 359.461 221.422 361.716 219.552 363.439C217.645 365.199 215.408 366.079 212.841 366.079C211.301 366.079 209.633 365.768 207.837 365.144C206.04 364.521 204.958 364.209 204.591 364.209C203.638 364.209 203.052 364.833 202.832 366.079H201.677L200.466 354.364H201.841C202.722 357.591 204.078 359.974 205.911 361.514C207.708 363.054 209.706 363.824 211.906 363.824C213.593 363.824 214.968 363.348 216.031 362.394C217.095 361.441 217.626 360.213 217.626 358.709C217.626 357.243 217.003 355.849 215.757 354.529C214.51 353.209 212.438 351.743 209.542 350.129C205.912 348.186 203.29 346.261 201.677 344.354C200.063 342.484 199.257 340.413 199.257 338.139C199.257 335.316 200.338 332.933 202.501 330.989C204.665 329.083 207.323 328.129 210.477 328.129C212.31 328.129 214.18 328.441 216.087 329.064C217.957 329.688 219.112 329.999 219.552 329.999C219.955 329.999 220.303 329.816 220.596 329.449C220.89 329.119 221.055 328.698 221.091 328.184H222.302L223.952 339.844H222.686C221.33 336.508 219.753 334.051 217.957 332.474C216.16 330.898 214.033 330.109 211.577 330.109C209.56 330.109 207.928 330.678 206.681 331.814C205.435 332.988 204.811 334.491 204.811 336.324\" fill=\"black\"/>\n" +
        "<g id='compass' style='transform-origin: center;'>\n" +
        "<path d=\"M213.973 23.7056L202.722 191.046C196.416 194.86 192.222 201.786 192.222 209.702L201.472 209.702L226.472 209.702L235.816 209.702C235.816 201.761 231.572 194.82 225.222 191.014L213.972 23.7036L213.973 23.7056Z\" fill=\"#CC0000\" stroke=\"#A40000\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path d=\"M214.012 395.737L202.762 228.396C196.456 224.583 192.262 217.656 192.262 209.74L201.512 209.74L226.512 209.74L235.856 209.74C235.856 217.682 231.612 224.623 225.262 228.429L214.012 395.739L214.012 395.737Z\" fill=\"#3465A4\" stroke=\"#204A87\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
        "<path d=\"M214.023 24.6456L214.022 209.706L226.46 209.706L235.804 209.706C235.804 201.765 231.56 194.824 225.21 191.018L214.022 24.6376L214.023 24.6456Z\" fill=\"url(#paint0_linear_6_2)\"/>\n" +
        "<path d=\"M214.022 209.736L214.022 395.737L225.272 228.426C231.622 224.621 235.866 217.68 235.866 209.738L226.523 209.738L214.023 209.738L214.022 209.736Z\" fill=\"url(#paint1_linear_6_2)\"/>\n" +
        "<path d=\"M213.933 23.8556L214.286 195.156Z\" fill=\"#F2F2F2\"/>\n" +
        "<path d=\"M213.933 23.8556L214.286 195.156\" stroke=\"url(#paint2_linear_6_2)\"/>\n" +
        "<path d=\"M213.932 393.477L214.286 224.476Z\" fill=\"#F2F2F2\"/>\n" +
        "<path d=\"M213.932 393.477L214.286 224.476\" stroke=\"url(#paint3_linear_6_2)\"/>\n" +
        "<path d=\"M214.042 195.226C206.034 195.226 199.542 201.718 199.542 209.726C199.542 217.734 206.034 224.226 214.042 224.226C222.05 224.226 228.542 217.735 228.542 209.726C228.542 201.718 222.051 195.226 214.042 195.226ZM214.042 197.351C220.879 197.351 226.448 202.89 226.448 209.726C226.448 216.563 220.879 222.132 214.042 222.132C207.206 222.132 201.667 216.563 201.667 209.726C201.667 202.89 207.206 197.351 214.042 197.351Z\" fill=\"url(#paint4_linear_6_2)\"/>\n" +
        "<path d=\"M226.413 209.728C226.413 216.565 220.871 222.107 214.034 222.107C207.198 222.107 201.656 216.565 201.656 209.728C201.656 202.891 207.198 197.349 214.034 197.349C220.871 197.349 226.413 202.891 226.413 209.728Z\" fill=\"url(#paint5_linear_6_2)\"/>\n" +
        "<path d=\"M208.762 201.446C209.093 201.236 209.528 201.332 209.739 201.663L215.042 209.079L219.524 217.018C219.735 217.348 219.638 217.783 219.308 217.994C218.978 218.204 218.542 218.108 218.332 217.778L212.917 210.433L208.546 202.423C208.336 202.092 208.432 201.657 208.762 201.446L208.762 201.446Z\" fill=\"url(#paint6_linear_6_2)\"/>\n" +
        "<path d=\"M222.312 204.446C222.523 204.777 222.426 205.212 222.096 205.423L214.609 210.614L206.741 215.208C206.411 215.419 205.975 215.322 205.765 214.992C205.554 214.662 205.651 214.226 205.981 214.016L213.374 208.676L221.336 204.23C221.666 204.019 222.102 204.116 222.312 204.446L222.312 204.446Z\" fill=\"url(#paint7_linear_6_2)\"/>\n" +
        "</g>\n" +
        "<defs>\n" +
        "<linearGradient id=\"paint0_linear_6_2\" x1=\"225.952\" y1=\"203.466\" x2=\"214.043\" y2=\"68.7558\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#8B0000\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#A40000\" stop-opacity=\"0\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint1_linear_6_2\" x1=\"224.942\" y1=\"209.736\" x2=\"214.022\" y2=\"361.077\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#173560\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#204A87\" stop-opacity=\"0\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint2_linear_6_2\" x1=\"214.102\" y1=\"195.62\" x2=\"214.103\" y2=\"58.1226\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#F2F2F2\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#F2F2F2\" stop-opacity=\"0\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint3_linear_6_2\" x1=\"214.102\" y1=\"224.015\" x2=\"214.102\" y2=\"359.668\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#F2F2F2\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#F2F2F2\" stop-opacity=\"0\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint4_linear_6_2\" x1=\"205.442\" y1=\"200.286\" x2=\"228.542\" y2=\"224.226\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#EEEEEC\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#D3D7CF\" stop-opacity=\"0\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint5_linear_6_2\" x1=\"201.654\" y1=\"197.347\" x2=\"210.052\" y2=\"219.58\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#888A85\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#D3D7CF\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint6_linear_6_2\" x1=\"214.047\" y1=\"209.729\" x2=\"214.047\" y2=\"209.729\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#888A85\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#BABDB6\"/>\n" +
        "</linearGradient>\n" +
        "<linearGradient id=\"paint7_linear_6_2\" x1=\"214.03\" y1=\"209.731\" x2=\"214.03\" y2=\"209.731\" gradientUnits=\"userSpaceOnUse\">\n" +
        "<stop stop-color=\"#888A85\"/>\n" +
        "<stop offset=\"1\" stop-color=\"#D3D7CF\"/>\n" +
        "</linearGradient>\n" +
        "</defs>\n" +
        "</svg>\n" +
        "</div>"


    plan_main.setAttribute('class', 'css--upload-parent mx-auto drag-area')
    plan_main.appendChild(expandBar);
    plan_main.appendChild(photo_prev);
    plan_main.appendChild(footerBar);


    scene.appendChild(plan_main);

    for (let i = 0; i <= 4; i++) {
        rName = points[i].name;
        rSize = points[i].area;
        var existingContent = $('#flags').html();
        var toInsert = '<div id="pointer' + i + '" class="flag">' +
            '<svg id="pointerParent' + i + '" width="100" height="100" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="css--display-none" id="pointerRadar' + i + '" d="M1000 500C1000 434.339 987.067 369.321 961.94 308.658C936.812 247.995 899.983 192.876 853.553 146.447C807.124 100.017 752.004 63.1876 691.342 38.0602C630.679 12.9329 565.661 -2.87013e-06 500 0L500 500H1000Z" fill="#00FF94" fill-opacity="0.45"/>' +
            '<circle  data-size="' + rSize + '" data-name="' + rName + '" class="circle" style="cursor: pointer;" id="pointerSVG' + i + '" cx="500" cy="500" r="227.5" fill="#494949" stroke="black" stroke-width="45"/></svg></div>';

        $('#flags').html(existingContent + toInsert);
        // console.log(i);
        if (i == 0) {
            var radar = i;
            removeRadar();
            $('#pointerRadar' + radar).removeClass("css--display-none");
            //$('#room-now').text($('#pointerSVG' + radar).data("name") + " Platība:" + $('#pointerSVG' + radar).data("size") + "m2");
            $('#room-now-name').text($('#pointerSVG' + radar).data("name"));
            $('#room-now-size').text($('#pointerSVG' + radar).data("size") + "m2");
        }
        $(".flag").draggable({
            containment: ".drag-area",
            create: function (event, ui) {
                //this.draggable('disable');
                //todo Position flags using points[i].x and y
            },
            // stop: function (event, ui) {
            //   var id = Number(this.id.slice(-1) - 1);
            //   points[id].x = ui.position.left;
            //   points[id].y = ui.position.top;
            //   const myEvent = new Event('cords');
            //   var sceneEl = document.querySelector('a-scene');
            //   sceneEl.dispatchEvent(myEvent);
            //   // console.log(points);
            // }
        });
        $(this).attr('disabled', 'disabled');
    }

}

$(document).ready(function () {
    createHead();
    createBody();
    createScene();
    createPlan();
    disaebleDrag()
});

function disaebleDrag() {
    for (let i = 0; i <= 4; i++) {
        $('#pointer' + i).draggable('disable')
    }
}

//portal click handler
$(document).on('click', '.link', function (event) {
    var radar = Number(event.target.id);
    removeRadar();
    console.log(event.target.id.slice(-1));
    let rotationCamera = document.getElementById("image-360");
    rotationCamera.setAttribute("rotation", "0 " + points[event.target.id.slice(-1)].north + " 0")
    //var skyImage = document.getElementById("link" + Number(event.target.id)).getAttribute("data-src")
    //console.log(skyImage);
    //document.querySelector('a-sky').setAttribute('src', skyImage);
    const myEvent = new Event('change');
    activeRoom = event.target.id;
    var sky = document.querySelector('a-sky');
    sky.setAttribute('src', "#pointer" + event.target.id + "-image");
    sky.dispatchEvent(myEvent);
    $('#pointerRadar' + radar).removeClass("css--display-none")
    //$('#room-now').text(points[event.target.id].name + " Platība:" + points[event.target.id].area + "m2")
    $('#room-now-name').text(points[event.target.id].name);
    $('#room-now-size').text(points[event.target.id].area + "m2");
    calculatePosition(event.target.id)
});

//calculates portal locations given a clicked portal/circle id(0-4)
function calculatePosition(clickedId) {
    var radius = 0;
    var offsetx = points[clickedId].x;
    var offsety = points[clickedId].y;
    for (let i = 0; i <= 4; i++) {
        if (i == clickedId) {
            var link = document.getElementById('link' + i);
            link.setAttribute('position', '0 -10 0');
            link.setAttribute('visible', false);
            continue
        }

        var relativeX = points[i].x - offsetx;
        var relativey = offsety - points[i].y;
        radius = Math.sqrt(relativeX * relativeX + relativey * relativey) / 100;
        var theta = Math.atan2(relativey, relativeX);
        var PositionX = radius * Math.cos(theta);
        var PositionZ = radius * Math.sin(theta) * -1;
        console.log("Point " + i + " angle: " + (theta * 180 / Math.PI) + " Radius: " + radius + " PosX:" + PositionX + " Posz: " + PositionZ)

        var link = document.getElementById('link' + i);
        link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
        link.setAttribute('visible', true);
    }
}

function removeRadar() {
    for (let i = 0; i <= 5; i++) {

        $("#pointerRadar" + i).addClass("css--display-none")
    }
}

//circle click handler
$(document).on('click', '.circle', function (event) {
    console.log(event.target.id + " from circle");
    var sceneEl = document.querySelector('a-scene');
    //fade(document.getElementById('a-scene'));
    var imageSource = document.getElementById('link' + Number(event.target.id.slice(-1)));
    let rotationCamera = document.getElementById("image-360");

    rotationCamera.setAttribute("rotation", "0 " + points[event.target.id.slice(-1)].north + " 0")

    //console.log('link' + Number(event.target.id.slice(-1) - 1))
    sceneEl.querySelector('a-sky').setAttribute('src', imageSource.getAttribute('data-src'));
    const myEvent = new Event('change');

    sceneEl.querySelector('a-sky').dispatchEvent(myEvent);
    //$('#room-now').text($(this).data("name") + " Platība:" + $(this).data("size") + "m2")

    removeRadar()
    $(this).siblings().removeClass("css--display-none")
    var clickedId = event.target.id.slice(-1);
    //$('#room-now').text(points[clickedId].name + " Platība:" + points[clickedId].area + "m2")
    $('#room-now-name').text(points[clickedId].name);
    $('#room-now-size').text(points[clickedId].area + "m2");
    activeRoom = clickedId;
    console.log(clickedId)
    calculatePosition(clickedId);
});

$(document).on('click', '#infoNotch', function () {
    $('#room-now').toggleClass("d-none")
})

AFRAME.registerComponent('rotation-reader', {
    tick: function () {
        let rotation = this.el.object3D.rotation.y * (180 / Math.PI) + 45;
        let compassRotation = rotation - 45

        //console.log(compassRotation)
        $('#compass').css({'transform': 'rotate(' + -1 * compassRotation + 'deg)'});
        for (let i = 0; i <= 5; i++) {
            $('#pointerParent' + i).css({'transform': 'rotate(' + -1 * rotation + 'deg)'});
        }
    }
});
let map_expanded = false;
$(document).on('click', '#imagePreview', function () {
    if (map_expanded === false) {
        $('.css--upload-parent').addClass('expanded');
        $('#expandButton > img').addClass('expandedButton');
        console.log(map_expanded)
        map_expanded = true;
        console.log(map_expanded)
    }
});

$(document).on('click', '#expandButton', function () {

    $('.css--upload-parent').toggleClass('expanded');
    $('#expandButton > img').toggleClass('expandedButton');
    map_expanded = false;
});
$(".link").hover(function(){
    console.log("1")

});


//     mouseenter: function () {
// console.log("1")
//     },
//     mouseleave: function () {
//         console.log("2")
//     }
// });
$(document).on('mouseenter', '.link', function() {
console.log("1")
});
$(document).on('mouseleave', '.link', function() {
        console.log("2")
});
AFRAME.registerComponent('change-color-on-hover', {

    init: function () {

        $(".link").addEventListener('mouseenter', function () {
            console.log("2")
        });

        $(".link").addEventListener('mouseleave', function () {
            console.log("2")
        });
    }
});


