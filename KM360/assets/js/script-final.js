const sceneCenter = new THREE.Vector3(0, 0, 0);
const points = [
  { "x": 0, "y": 0, "name": "TBD", "area": -1, "active": true, "panorama": null, "north": 0 },
  { "x": 0, "y": 1, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0 },
  { "x": 0, "y": 2, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0 },
  { "x": 0, "y": 3, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0 },
  { "x": 0, "y": 4, "name": "TBD", "area": -1, "active": false, "panorama": null, "north": 0 }];
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
  template.innerHTML = "<a-entity class='link'geometry='primitive: plane; height: 0.5; width: 0.5'material='shader: flat; src:assets/icons/impact-point-svgrepo-com.svg; side: double;'material-alpha-test rotation='0 0 0'id='${id}'event-set__mouseenter='scale: 1.2 1.2 1'event-set__mouseleave='scale: 1 1 1'proxy-event='event: click; to: #image-360; as: fade'sound='on: click; src: #click-sound'><a-text id='${id}' color='#000' value='${name}' position='-0.7 0.6 0' rotation='0 0 0'></a-text></a-entity>"
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
  infoBar.setAttribute("class", "container-fluid info-panel text-center")
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
  infoBarSpan.innerHTML = "<div id='infoNotch' style='background-color:white; border-radius:0 0 20px 20px;padding:10px;'><img src='assets/icons/info-svgrepo-com.svg' class='d-block' height='16' width='16'></div>"
  infoBar.append(infoBarSpan)
  scene.append(infoBar);


  var compassContainer = document.createElement('div')
  compassContainer.setAttribute('id', 'compassContainer')
  var compassUpper = document.createElement("div")
  compassUpper.setAttribute("class", "text-center compass-letters")
  compassUpper.innerHTML = 'N'
  compassContainer.appendChild(compassUpper)
  var compassMiddle = document.createElement("div")
  compassMiddle.setAttribute("class", "w-100 d-flex flex-row")
  compassMiddle.setAttribute("id", "compass-middle")
  var compassLeft = document.createElement("div")
  compassLeft.setAttribute("class", "text-center compass-letters")
  compassLeft.innerHTML = 'W'
  compassMiddle.appendChild(compassLeft);

  var compass = document.createElement("img")
  compass.setAttribute("src", "assets/icons/compass-svgrepo-com.svg")
  compass.setAttribute("class", 'd-block')
  compass.setAttribute("id", 'compass')
  compass.setAttribute("width", '50')
  compassMiddle.appendChild(compass);

  var compassRight = document.createElement("div")
  compassRight.setAttribute("class", "text-center compass-letters")
  compassRight.innerHTML = 'E'
  compassMiddle.appendChild(compassRight);
  compassContainer.appendChild(compassMiddle);

  var compassLower = document.createElement("div")
  compassLower.setAttribute("class", "text-center compass-letters")
  compassLower.innerHTML = 'S'
  compassContainer.appendChild(compassLower)

  scene.appendChild(compassContainer);

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
  cursorElement.setAttribute("look-controls", "")
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
  expandBar.setAttribute("class", "w-100 text-end pe-2 py-2");
  expandBar.innerHTML = "<button id='expandButton' class=' btn'><img class='d-block h-100' src='assets/icons/expand-svgrepo-com.svg'></button>"
  plan_main.setAttribute('class', 'css--upload-parent mx-auto drag-area')
  plan_main.appendChild(expandBar);
  plan_main.appendChild(photo_prev);
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
  console.log(event.target.id + " from portal");
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


$(document).on('click', '#expandButton', function () {
  $('.css--upload-parent').toggleClass('expanded');
  $('#expandButton > img').toggleClass('expandedButton');
});

$(document).on('click', '#infoNotch', function () {
  $('#room-now').toggleClass("d-none")
})

AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    let rotation = this.el.object3D.rotation.y * (180 / Math.PI) + 45;
    let compassRotation = rotation + points[activeRoom].north;

    //console.log(compassRotation)
    $('#compass').css({ 'transform': 'rotate(' + -1 * compassRotation + 'deg)' });
    for (let i = 0; i <= 5; i++) { $('#pointerParent' + i).css({ 'transform': 'rotate(' + -1 * rotation + 'deg)' }); }
  }
});