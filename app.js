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
const mapDiv = document.querySelector("#map");

//ERROR MESSAGE FOR INVALID IP-ADDRESS
const renderErr = function (errMsg) {
  const errDiv = document.createElement("div");
  errDiv.classList.add("error");
  errDiv.classList.add("text-center");
  errDiv.innerHTML = `${errMsg}`;
  document.querySelector(".top-container").append(errDiv);
  setTimeout(function(){
    errDiv.style.animationName = 'fadeOut'
      setTimeout(function(){
          errDiv.remove()
      },500)
  },3000)
};

const map = L.map("map", {
  zoom: 8
}).setView([0, 0], 15);

const getaddressPro = async function (para) {
  try {
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_hUdp8MaSA3JQDttLmCj2iQQvRlu7G&ipAddress=${para}`)
    // console.log(res);
    if(!res.ok) throw new Error ('Err')
    // console.log(!res.ok) 
    const data = await res.json()
    // console.log(data);

    // DESTRUCTURING
    const { ip, isp, location } = data;
      const { city, country, timezone, lat, lng, postalCode } = location;
      
      ipAddress.textContent = ip;
      $city.textContent = city;
      code.textContent = postalCode;
      $country.textContent = country;
      $timezone.textContent = timezone;
      $isp.textContent = isp;
      
      const apiPosition = {
        coords: {
          latitude: lat,
          longitude: lng,
        },
      };

        const { latitude, longitude } = apiPosition.coords;
      
        const coords = [latitude, longitude];
              
        map.setView(coords, 15, {
          animate: true,
          pan: {
            duration: .8,
          },
        });

        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        let myIcon = L.icon({
          iconUrl: './images/icon-location.svg'
      });
      
        const marker = L.marker(coords,{icon: myIcon}).addTo(map);
  } catch (err) {
    renderErr("Invalid IP address or domain")
  }finally{
    input.value = ''
  }
};


input.focus();

search.addEventListener("click", function () {
  getaddressPro(input.value);
});
input.addEventListener("keypress", function (e) {
  if (e.which === 13) {
    getaddressPro(input.value);
  }
});

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(async () => {

  // GET USER'S IP-ADDRESS

 try {
  const url = await fetch('https://api.ipify.org?format=json')
  const res = await url.json()
  console.log(res.ip);
  getaddressPro(res.ip)
 } catch (error) {
  console.error('Error:', error);

    renderErr("Please turn on your location and refresh")
 }
})()


/*Test IPAddress*/

// getaddressPro('19.117.63') /*Error Test */
// getaddressPro('102.90.42.83')
// getaddressPro('197.210.85.177')
// getaddressPro('102.89.41.70')
