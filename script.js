//document.body.appendChild(document.createTextNode("REQUESTING PERMISSIONS3..."));

var button = document.createElement("BUTTON");
button.innerText = "GET PERMISSIONS";
button.onclick = getPermissions;
document.body.appendChild(button);
var dots = 0;

function getPermissions() {

  try {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      const permission = DeviceMotionEvent.requestPermission().then((permission) => {
        //document.body.appendChild(document.createTextNode("PERMISSIONS RESULTS"));
        if (permission === 'granted') {

        }
        else {

        }
        resolvedPermissions();
      });

      //document.body.appendChild(document.createTextNode("IOS 13 +"));
      //document.body.appendChild(document.createTextNode("permmission" + permission));

    }
    else {
      //document.body.appendChild(document.createTextNode("NOT IOS 13 +"));
      resolvedPermissions();
    }
  }
  catch (error) {
    //document.body.appendChild(document.createTextNode("error..."));
    //document.body.appendChild(document.createTextNode("error: " + error));

  }
  document.body.removeChild(button);
  setInterval(animateDirections,500);
}

function animateDirections(){
  var str = "Just listen for now";
  for(let i = 0; i < dots % 4; i++){
    str += ".";
  }
  dots++;
  var dir = document.getElementById("dir");
  dir.innerText = str;
}


var accel = 0;

function resolvedPermissions(){
  window.ondevicemotion = (event) => {
    var myAccel = (event.acceleration.x ** 2 + event.acceleration.y ** 2 + event.acceleration.z ** 2) ** 0.5;
   accel = Math.max(myAccel, accel);
   if(accel > 20 && myAccel < 1){
   reportAccel();
   }
  };
}



function reportAccel(){
    //document.body.innerText = "accel: " + accel;
    var dir = document.getElementById("dir");
    dir.innerText = "accel: " + accel;
    accel = Math.min(accel, 150);
    accel -= 20;
    accel /= 130.0;

  accel = 0;
}
