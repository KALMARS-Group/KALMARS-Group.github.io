
const sceneCenter = new THREE.Vector3(0, 0, 0);
const points = [
    { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": false, "panorama": null },
    { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": false, "panorama": null },
    { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": false, "panorama": null },
    { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": false, "panorama": null },
    { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": false, "panorama": null }];
var activeRoom = 0;
var planBase64 = "";
// Plāna pievienošana
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function () {
    readURL(this);
});

// Punktu pievienošana
let x = 0;
let y = 0;
let xMax = $('#svgArea').width();
let yMax = $('#svgArea').height();
for (let i = 0; i <= 5; i++) {
    $(document).on('click', '#addCircle' + i, function () {
        rName = $('#room-name' + i).val();
        points[i - 1].name = rName;
        rSize = $('#room-size' + i).val();
        points[i - 1].area = rSize;
        points[i - 1].active = true;
        const myEvent = new CustomEvent('info', { detail: i });
        var sceneEl = document.querySelector('a-scene');
        sceneEl.dispatchEvent(myEvent);
        var existingContent = $('#flags').html();
        var toInsert = '<div id="pointer' + i + '" class="flag" style="left:' + 60 * (i - 1) + 'px" >' +
            '<h1 class="css--pointer-number">' + i + '</h1>' +
            '<svg id="pointerParent' + i + '" width="100" height="100" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path class="css--display-none" id="pointerRadar' + i + '" d="M1000 500C1000 434.339 987.067 369.321 961.94 308.658C936.812 247.995 899.983 192.876 853.553 146.447C807.124 100.017 752.004 63.1876 691.342 38.0602C630.679 12.9329 565.661 -2.87013e-06 500 0L500 500H1000Z" fill="#00FF94" fill-opacity="0.45"/>' +
            '<circle  data-size="' + rSize + '" data-name="' + rName + '" class="circle" style="cursor: pointer;" id="pointerSVG' + i + '" cx="500" cy="500" r="227.5" fill="#494949" stroke="black" stroke-width="45"/></svg></div>';

        $('#flags').html(existingContent + toInsert);
        // console.log(i);
        if (i == 1) {
            var radar = i;
            removeRadar();
            $('#pointerRadar' + radar).removeClass("css--display-none");
            $('#room-now').text($('#pointerSVG' + radar).data("name") + " Platība:" + $('#pointerSVG' + radar).data("size") + "m2");

        }
        $(".flag").draggable({
            containment: ".drag-area",
            stop: function (event, ui) {
                var id = Number(this.id.slice(-1) - 1);
                points[id].x = ui.position.left;
                points[id].y = ui.position.top;
                const myEvent = new Event('cords');
                var sceneEl = document.querySelector('a-scene');
                sceneEl.dispatchEvent(myEvent);
                console.log(points);
            }
        });
        $(this).attr('disabled', 'disabled');
    });
    $(document).on('click', '#removeCircle' + i, function () {
        $("#pointer" + i).remove();
        $('#addCircle' + i).removeAttr('disabled');
        points[i - 1].active = false;


    });
}

function removeRadar() {
    for (let i = 0; i <= 5; i++) {

        $("#pointerRadar" + i).addClass("css--display-none")
    }
}

var counter = 2;
// Punktu daudzuma regulēšana
$(document).ready(function () {

    //let counter = 2;

    $("#addButton").click(function () {
        if (counter > 5) {
            alert("Tikai pieci punkti ir atļauti");
            return false;
        }
        let newTextBoxDiv = $(document.createElement('div'))
            .attr("id", 'TextBoxDiv' + counter).attr("class", 'pt-2 inputRow');

        newTextBoxDiv.after().html(
            '<div class="modal fade" id="PanoModal' + counter + '" tabindex="-1" role="dialog" aria-labelledby="PanoModalLabel' + counter + '" aria-hidden="true">\n' +
            '<div class="modal-dialog" role="document">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title" id="PanoModalLabel' + counter + '">Panorāmas pievienošana</h5>' +
            '<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="modal-body row">' +
            '<div class="col-6"><input id="room-name' + counter + '" type="text" placeholder="Nosaukums"> </div>' +
            '<div class="col-6"><input id="room-size' + counter + '" type="number" placeholder="Platība"> </div>' +
            '<div class="col-12 d-flex justify-content-center"><p class="pe-5">Ievieto panorāmu</p><input type="file" id="panorama' + counter + '" accept=".png, .jpg, .jpeg, .svg" onchange="encodeImageFileAsURL(this)"></div> ' +

            '</div>' +
            '<div class="modal-footer">' +
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
            '<button class="btn btn-primary" id="addCircle' + counter + '">Pievienot punktu</button>' +
            '<button class="btn btn-danger" id="removeCircle' + counter + '">Izdzēst punktu</button> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '<div class="row"> ' +
            '<div class="col-6"> ' +
            '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PanoModal' + counter + '">' +
            '  Punkta Nr.' + counter + ' konfigurācija' +
            '</button>' +
            '</div> ' +
            '</div> '
        );

        newTextBoxDiv.appendTo("#TextBoxesGroup");


        counter++;
    });

    $("#removeButton").click(function () {
        if (counter == 1) {
            alert("No more points to remove");
            return false;
        }

        counter--;

        $("#TextBoxDiv" + counter).remove();
        $("#pointer" + counter).remove();

    });
});


//circle click handler
$(document).on('click', '.circle', function (event) {
    //onsole.log(event.target.id);
    var radius = 5;
    var sceneEl = document.querySelector('a-scene');
    //fade(document.getElementById('a-scene'));

    var imageSource = document.getElementById('link' + Number(event.target.id.slice(-1) - 1));
    //console.log('link' + Number(event.target.id.slice(-1) - 1))
    sceneEl.querySelector('a-sky').setAttribute('src', imageSource.getAttribute('data-src'));
    //unfade(document.querySelector('a-scene'));
    const myEvent = new Event('change');

    sceneEl.querySelector('a-sky').dispatchEvent(myEvent);
    $('#room-now').text($(this).data("name") + " Platība:" + $(this).data("size") + "m2")
    removeRadar()
    $(this).siblings().removeClass("css--display-none")


    switch (event.target.id) {
        case 'pointerSVG1':
            var offsetx = points[0].x;
            var offsety = points[0].y;
            for (let i = 0; i <= 4; i++) {
                if (i == 0) {
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
                var link = document.getElementById('link' + i);
                link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
                if (points[i].active == true) {
                    link.setAttribute('visible', true);
                }
            }
            activeRoom = 0;
            break
        case 'pointerSVG2':
            var offsetx = points[1].x;
            var offsety = points[1].y;
            for (let i = 0; i <= 4; i++) {
                if (i == 1) {
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
                var link = document.getElementById('link' + i);
                link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
                if (points[i].active == true) {
                    link.setAttribute('visible', true);
                }
            }
            activeRoom = 1;
            break
        case 'pointerSVG3':
            var offsetx = points[2].x;
            var offsety = points[2].y;
            for (let i = 0; i <= 4; i++) {
                if (i == 2) {
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
                var link = document.getElementById('link' + i);
                link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
                if (points[i].active == true) {
                    link.setAttribute('visible', true);
                }
            }
            activeRoom = 2;
            break
        case 'pointerSVG4':
            var offsetx = points[3].x;
            var offsety = points[3].y;
            for (let i = 0; i <= 4; i++) {
                if (i == 3) {
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
                var link = document.getElementById('link' + i);
                link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
                if (points[i].active == true) {
                    link.setAttribute('visible', true);
                }
            }
            activeRoom = 3;
            break
        case 'pointerSVG5':
            var offsetx = points[4].x;
            var offsety = points[4].y;
            for (let i = 0; i <= 4; i++) {
                if (i == 4) {
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
                var link = document.getElementById('link' + i);
                link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
                if (points[i].active == true) {
                    link.setAttribute('visible', true);
                }
            }
            activeRoom = 4;
            break
        default:
            console.log("Id not found")
            break
    }

});



//panorāmu asseti
var assets = $('a-assets');
setTimeout(function () {
    for (var i = 1; i <= 5; i++) {//todo:replace i<=5 to i<=pointCount once such value is available
        assets.prepend('<img id="pointer' + i + '-image" src="Ofice' + i + '.jpeg">');
    }
    //set sky to the first asset
    $('#pointer1-image').on('load', function () {
    });
});
//initial load
var sceneEl = document.querySelector('a-scene');
AFRAME.registerComponent('do-something-once-loaded', {
    init: function () {
        activeRoom = 0;
        var sceneEl = document.querySelector('a-scene');
        var radius = 5;
        var offsetx = points[0].x;
        var offsety = points[0].y;
        removeRadar();
        // var cursor = document.getElementById('cursor');
        // cursor.setAttribute('visible', false)
        $('#pointerRadar1').removeClass("css--display-none")
        $('#room-now').text($('#pointerSVG1').data("name") + " Platība:" + $('#pointerSVG1').data("size") + "m2");
        for (let i = 0; i <= 4; i++) {
            if (i == 0) {
                var block = document.createElement('a-entity')
                block.setAttribute('class', 'linkEntity');
                block.setAttribute('data-id', i);
                block.setAttribute('id', 'link' + i);
                block.setAttribute('clickHandler');
                block.setAttribute('visible', 'false');
                block.setAttribute('template', 'src: #link');
                block.setAttribute('data-src', '#pointer' + (i + 1) + '-image');
                block.setAttribute('data-name', points[i].name);
                block.setAttribute('data-area', points[i].area);
                block.setAttribute('data-thumb', '#cubes-thumb');
                block.setAttribute('position', 0 + ' -10 ' + 0);
                block.setAttribute('look-at', '[camera]');
                sceneEl.appendChild(block);
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
            block.setAttribute('visible', false);
            block.setAttribute('template', 'src: #link');
            block.setAttribute('data-src', '#pointer' + (i + 1) + '-image');
            block.setAttribute('data-name', points[i].name);
            block.setAttribute('data-area', points[i].area);
            block.setAttribute('data-thumb', '#cubes-thumb');
            block.setAttribute('position', PositionX + ' -10 ' + PositionZ);
            block.setAttribute('look-at', '[camera]');
            sceneEl.appendChild(block);

        }
    }

});

//remove cursor outside of vr/fullscreen mode
document.querySelector('a-scene').addEventListener('enter-vr', function () {
    var cursor = document.getElementById('cursor');
    cursor.setAttribute('visible', true)
});
document.querySelector('a-scene').addEventListener('exit-vr', function () {
    var cursor = document.getElementById('cursor');
    cursor.setAttribute('visible', false);
});
//portal click handler
$(document).on('click', '.link', function (event) {
    var radar = Number(event.target.id) + 1;
    removeRadar();
    console.log(event.target.id);
    var skyImage = document.getElementById("link" + Number(event.target.id)).getAttribute("data-src")
    //console.log(skyImage);
    //document.querySelector('a-sky').setAttribute('src', skyImage);
    const myEvent = new Event('change');
    activeRoom = event.target.id;
    sceneEl.querySelector('a-sky').setAttribute('src', skyImage);
    sceneEl.querySelector('a-sky').dispatchEvent(myEvent);
    $('#pointerRadar' + radar).removeClass("css--display-none")
    $('#room-now').text($('#pointerSVG' + radar).data("name") + " Platība:" + $('#pointerSVG' + radar).data("size") + "m2")
    var radius = 0;
    var clickedId = event.target.id;
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
        var link = document.getElementById('link' + i);
        link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
        if (points[i].active == true) {
            link.setAttribute('visible', true);
        }


    }
    activeRoom = clickedId;
});
//create json object
function createJSON() {
    jsonObj = [];
    var i = 0;

    $(".inputRow").each(function () {
        // var panoramaid = "panorama" + (i + 1)
        // var panorama = document.getElementById(panoramaid);
        // console.log(panorama)
        // encodeImageFileAsURL(panorama)
        item = {}
        item["id"] = i;
        item["name"] = points[i].name;
        item["size"] = points[i].area;
        item["panorama"] = points[i].panorama;
        item["x"] = points[i].x
        item["y"] = points[i].y
        item["north"] = points[i].north

        jsonObj.push(item);

        i++;
    });
    plan = {}
    plan["image"] = planBase64;
    jsonObj.push(plan);
    var jsonString = JSON.stringify(jsonObj);
    download("hello.json", jsonString);

    console.log(jsonObj);
}
//download json file
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.

var imagebase64 = "";
//encode images as base64
function encodeImageFileAsURL(element) {

    if (element.id != "imageUpload") {
        var id = Number(element.id.slice(-1) - 1)
        //console.log(id);
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            points[id].panorama = reader.result;

        }
        reader.readAsDataURL(file);
    } else {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            planBase64 = reader.result;
            //console.log(planBase64)
        }
        reader.readAsDataURL(file);
    }


}
//update portal location from circles
$('a-scene').on('cords', function () {
    // console.log("cords");
    var radius = 0;
    var clickedId = activeRoom;
    var offsetx = points[clickedId].x;
    var offsety = points[clickedId].y;
    for (let i = 0; i <= 4; i++) {


        var relativeX = points[i].x - offsetx;
        var relativey = offsety - points[i].y;
        radius = Math.sqrt(relativeX * relativeX + relativey * relativey) / 100;
        var theta = Math.atan2(relativey, relativeX);
        var PositionX = radius * Math.cos(theta);
        var PositionZ = radius * Math.sin(theta) * -1;
        var link = document.getElementById('link' + i);
        link.setAttribute('position', PositionX + ' -1 ' + PositionZ);
        if (points[i].active == true) {
            link.setAttribute('visible', true);
        }
        if (i == clickedId) {
            //link.setAttribute('position', '0 -10 0');
            link.setAttribute('visible', false);
            //continue
        }
    }
})
//update portal names/coordinates/image on circle addition
$('a-scene').on('info', function (event) {
    // console.log("info")
    var id = Number(event.detail) - 1;

    //console.log(portal);
    document.getElementById(id).querySelector('a-text').setAttribute('value', points[id].name);
    var radius = 0;
    var clickedId = activeRoom;
    var offsetx = points[clickedId].x;
    var offsety = points[clickedId].y;
    var portal = document.getElementById('link' + id);
    portal.setAttribute('data-src', points[id].panorama)
    console.log("_target: #image-360; _delay: 300; material.src: " + imagebase64);
    //document.getElementById(id).setAttribute("event-set__click", "_target: #image-360; _delay: 300; material.src: " + imagebase64)
    // console.log(id);
    if (id == 0) {
        document.querySelector('a-sky').setAttribute('src', points[id].panorama)
    }


    for (let i = 0; i <= 4; i++) {


        var relativeX = points[i].x - offsetx;
        var relativey = offsety - points[i].y;
        radius = Math.sqrt(relativeX * relativeX + relativey * relativey) / 100;
        var theta = Math.atan2(relativey, relativeX);
        var PositionX = radius * Math.cos(theta);
        var PositionZ = radius * Math.sin(theta) * -1;
        var link = document.getElementById('link' + i);
        link.setAttribute('position', PositionX + ' -1 ' + PositionZ);

        if (points[i].active == true & i != activeRoom) {
            link.setAttribute('visible', true);

        }


    }
})
AFRAME.registerComponent('north-reader', {
    tick: function () {
        let rotation = this.el.object3D.rotation.y * (180 / Math.PI);
        // console.log(this)
    }
});
$("#compass-set-button").click(function () {
    let degrees = $("#camera-el")[0].object3D.rotation.y * (180 / Math.PI);
    points[activeRoom].north = degrees;
});
