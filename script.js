document.body.appendChild(document.createTextNode("HI FROM A TEXT NODE"));

window.addEventListener("devicemotion", (event) => {
    console.log(`${event.acceleration.x} m/s2`);
    document.body.innerText = "ACCEL: " + `${event.acceleration.x} m/s2`
  });

  //blah
  