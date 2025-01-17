document.body.appendChild(document.createTextNode("REQUESTING PERMISSIONS3..."));

var button = document.createElement("BUTTON");
button.innerText = "GET PERMISSIONS";
button.onclick = getPermissions;
document.body.appendChild(button);

function getPermissions() {

  try {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      const permission = DeviceMotionEvent.requestPermission().then((permission) => {
        document.body.appendChild(document.createTextNode("PERMISSIONS RESULTS"));
        if (permission === 'granted') {

        }
        else {

        }
        resolvedPermissions();
      });

      document.body.appendChild(document.createTextNode("IOS 13 +"));
      document.body.appendChild(document.createTextNode("permmission" + permission));

    }
    else {
      document.body.appendChild(document.createTextNode("NOT IOS 13 +"));
      resolvedPermissions();
    }
  }
  catch (error) {
    document.body.appendChild(document.createTextNode("error..."));
    document.body.appendChild(document.createTextNode("error: " + error));

  }
}

function resolvedPermissions(){
    setInterval(reportAccel, 100);
}

var accel = 0;

document.body.appendChild(document.createTextNode("HI FROM A TEXT NODE1"));




window.ondevicemotion = (event) => {
  var myAccel = (event.acceleration.x ** 2 + event.acceleration.y ** 2 + event.acceleration.z ** 2) ** 0.5;
 accel = Math.max(myAccel, accel);
};

function reportAccel(){
  if(accel > 0.3)
    document.body.innerText = "accel: " + accel;
  accel = 0;
}
