

window.addEventListener("devicemotion", (event) => {
    console.log(`${event.acceleration.x} m/s2`);
    document.body.innerText = "ACCEL: " + `${event.acceleration.x} m/s2`
  });

  //blah
  