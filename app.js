'use strict'

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            // console.log(position);

            const { latitude, longitude } = position.coords;

            console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];

            const map = L.map('map').setView(coords, 10)

            console.log(map);

            console.log(L);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);

          const marker = L.marker(coords).addTo(map)

          marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup()

        //   API
        const renderErr = function(errMsg){
            const errDiv = document.createElement('div')
            errDiv.classList.add('error')
            errDiv.innerHTML =`${errMsg}`
            document.querySelector('.top-container').append(errDiv)
        }

        const getaddressPro = function(para){
            // fetch(`http://ip-api.com/json/192.212.174.101`)
            fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hUdp8MaSA3JQDttLmCj2iQQvRlu7G&ipAddress=8.8.8.8`)
            .then(function (response) {
              if(!response.ok){
                throw new Error('Invalid IP address or domain')
              } 
              return response.json();
            })
            .then(function(data){
                console.log(data);
                // ipAddress.textContent = data.ip
                // region.textContent = data.location.region
                // asn.textContent = data.as.asn
                // country.textContent = data.location.country
                // timezone.textContent = data.location.timezone
                // isp.textContent = data.isp
            }).catch(err =>{
              renderErr('Invalid IP address or domain')
            })
        }
        // getaddressPro('197.210.85.177/32')
        getaddressPro()
          },
      function () {
        alert('Please allow browser to see your location');
      } /* fail callback */
    ); 
  }
