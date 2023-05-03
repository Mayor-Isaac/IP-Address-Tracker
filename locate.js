'use strict'
const successfulLookup = function (position) {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
      .then(response => response.json())
      .then(data => console.log(data)); // Or do whatever you want with the result
    }
    // console.log((window.navigator.geolocation));
    window.navigator.geolocation.getCurrentPosition(successfulLookup);