

var info = document.getElementById('infowindow-content')
let autocomplete = document.getElementById('autocomplete')
let weater = document.getElementById('weater')
function initMap() {
   autocomplete = new google.maps.places.Autocomplete(autocomplete)
   }
   info.addEventListener('click',function(){
     
     let path = fetch('http://api.weatherbit.io/v2.0/forecast/daily?city='+weater.value+'&key=16632115da314485b772f3d91c04d1aa')
    .then(response=>response.json())
    .then(function(init){
      return console.log(init)})
      return path
    })
   
   //let path = fetch('https://api.weatherbit.io/v2.0/forecast/daily?&key=16632115da314485b772f3d91c04d1aa')

   


