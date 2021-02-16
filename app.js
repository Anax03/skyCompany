
 /*
 function initMap() {
   const loc = {lat:40.4168,lng:3.7038};
   const map = new google.maps.Map(document.querySelector('#map'),{
zoom: 14 ,
center:loc
   });
const marker= new google.maps.Marker({position:loc,map:map});
}

*/

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }