document.body.appendChild(document.createTextNode("REQUESTING PERMISSIONS..."));


if (typeof DeviceMotionEvent.requestPermission === 'function') {
  const permission = DeviceMotionEvent.requestPermission().then((permission) => {
    if (permission === 'granted') {

    }
    else {

    }
  });

  document.body.appendChild(document.createTextNode("IOS 13 +"));

}
else {
  document.body.appendChild(document.createTextNode("NOT IOS 13 +"));

}

document.body.appendChild(document.createTextNode("HI FROM A TEXT NODE1"));

window.addEventListener("devicemotion", (event) => {
  console.log(`${event.acceleration.x} m/s2`);
  document.body.innerText = "ACCEL: " + `${event.acceleration.x} m/s2`;
});


window.ondevicemotion = (event) => {
  // Process event.acceleration, event.accelerationIncludingGravity,
  // event.rotationRate and event.interval
  console.log(`${event.acceleration.x} m/s2`);
  document.body.innerText = "ON MOTION ACCEL: " + `${event.acceleration.x} m/s2`;
  document.body.appendChild(document.createTextNode("ON MOTION ACCEL: " + `${event.acceleration.x} m/s2`));

};
