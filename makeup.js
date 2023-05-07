'use strict'
const root = document.querySelector('#root')
const innerMakeUp = `
<div class="top-container">
<div>
<h2 class="text-center fw-700">IP Address Tracker</h1>
<div class="search">
  <div class="input">
    <input type="text" placeholder="Search for any IP address or domain">
  </div>
  <div class="send">
    <img src="./images/icon-arrow.svg" alt="Arrow/Send icon">
  </div>
</div>
</div>
</div>
<div class="bottom-container">
<div class="details">
  <div>
    <p class="fw-700">IP Address</p>
    <h3 class="ip-address">192.212.174.101</h3>
  </div>
  <div>
    <p class="fw-700">Location</p>
    <h3><span class="city">Brooklyn</span>, <span class="country">NY</span> <span class="postalCode"> 10001</span> </h3>
  </div>
  <div>
    <p class="fw-700">Timezone</p>
    <h3>UTC <span class="timezone"> -05:00</span></h3>
  </div>
  <div>
    <p class="fw-700">ISP</p>
    <h3 class="isp">SpaceX Starlink</h3>
  </div>
</div>

<div id="map"></div>
</div>
<div class="attribution text-center">
Challenge by
<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="fw-700"
  >Frontend Mentor</a
>. Coded by <a href="https://www.frontendmentor.io/profile/Mayor-Isaac" class="fw-700">Ogunyileka Feranmi</a>.
</div>
`
root.innerHTML = innerMakeUp