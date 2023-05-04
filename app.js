"use strict";

// VARIABLES
const input = document.querySelector(".input input");
const search = document.querySelector(".send");
const ipAddress = document.querySelector(".ip-address");
const $timezone = document.querySelector(".timezone");
const $country = document.querySelector(".country");
const $city = document.querySelector(".city");
const code = document.querySelector(".postalCode");
const $isp = document.querySelector(".isp");

const getPosition = function(){
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
         loadMap ,
        function () {
          alert('Please allow browser to see your location');
        } /* fail callback */
      );
    }
  }

const renderErr = function (errMsg) {
  const errDiv = document.createElement("div");
  errDiv.classList.add("error");
  errDiv.innerHTML = `${errMsg}`;
  document.querySelector(".top-container").append(errDiv);
};

const loadMap = function (position) {
  console.log(position);

  const { latitude, longitude } = position.coords;

  const coords = [latitude, longitude];

  const map = L.map("map").setView(coords, 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker(coords).addTo(map);
  
};

const getaddressPro = function (para) {

  fetch(
    `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_hUdp8MaSA3JQDttLmCj2iQQvRlu7G&ipAddress=${para}`
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Invalid IP address or domain");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const { ip, isp, location } = data;
      const { city, country, timezone, lat, lng, postalCode } = location;

      ipAddress.textContent = ip;
      $city.textContent = city;
      code.textContent = postalCode;
      $country.textContent = country;
      $timezone.textContent = timezone;
      $isp.textContent = isp;

      const myPosition = {
        coords: {
          latitude: lat,
          longitude: lng,
        },
      };
      // console.log(myPosition);
      loadMap(myPosition);
    })
    .catch((err) => {
      renderErr("Invalid IP address or domain");
    });
};


// getaddressPro('19.117.63.126')
// getaddressPro('197.210.85.177')

input.focus();
search.addEventListener("click", function () {
  getaddressPro(input.value);
});
input.addEventListener("keypress", function (e) {
  if (e.which === 13) {
    getaddressPro(input.value);
  }
});
