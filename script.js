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
