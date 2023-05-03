'use strict'
const input = document.querySelector('.input input')
const search = document.querySelector('.send')
const ipAddress = document.querySelector('.ip-address')
const timezone = document.querySelector('.timezone')
const country = document.querySelector('.country')
const region = document.querySelector('.region')
const asn = document.querySelector('.asn')
const isp = document.querySelector('.isp')
const map = document.querySelector('.map iframe')


const renderErr = function(errMsg){
    const errDiv = document.createElement('div')
    errDiv.classList.add('error')
    errDiv.innerHTML =`${errMsg}`
    document.querySelector('.top-container').append(errDiv)
}
const getaddressPro = function(para){
    // fetch(`http://ip-api.com/json/192.212.174.101`)
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hUdp8MaSA3JQDttLmCj2iQQvRlu7G&ipAddress=${para}`)
    .then(function (response) {
      if(!response.ok){
        throw new Error('Invalid IP address or domain')
      } 
      return response.json();
    })
    .then(function(data){
        console.log(data);
        ipAddress.textContent = data.ip
        region.textContent = data.location.region
        asn.textContent = data.as.asn
        country.textContent = data.location.country
        timezone.textContent = data.location.timezone
        isp.textContent = data.isp
    }).catch(err =>{
      renderErr('Invalid IP address or domain')
    })
}
// getaddressPro('197.210.85.177/32')
// getaddressPro('12.4.5.7')
// getaddressPro('8.8.8.8')
/* My IP address 197.210.85.177/32 */
/*
http://ip-api.com/json/{query}
KOLOKO
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8250376211345!2d3.9233021141196374!3d7.373498014745175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10399260bf0635af%3A0x84ff5d64bc76fb4e!2sKoloko%20Health%20Centre!5e0!3m2!1sen!2sng!4v1675902601145!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
9WFG+95X, 200258, Oyo

MOKOLA
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5423614777087!2d3.8875012141197947!3d7.405061414342851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d4421b11519%3A0x199c057da80c4819!2sMokola%20Rd%2C%20Ibadan%2C%20Oyo!5e0!3m2!1sen!2sng!4v1675902767401!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
Ibadan, Oyo
 */