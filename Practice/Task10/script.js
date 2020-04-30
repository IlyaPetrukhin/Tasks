/*var input = document.getElementById('autocomplete');
function initMap() {
  var autocomplete = new google.maps.places.Autocomplete(input);
 
  info.addEventListener('click', function (){
      let path = fetch('https://api.weatherbit.io/v2.0/forecast/daily?city='+autocomplete.value+'&key=16632115da314485b772f3d91c04d1aa')
        .then(response=>response.json())
        .then(result=>console.log(result))
        return path
      })
}
*/

var info = document.getElementById('infowindow-content')
let autocomplete = document.getElementById('autocomplete')
function initMap() {
   autocomplete = new google.maps.places.Autocomplete(autocomplete)
   }
   info.addEventListener('click',fetch('https://api.weatherbit.io/v2.0/forecast/daily?&key=16632115da314485b772f3d91c04d1aa&'+autocomplete.value+'')
    .then(response=>response.json())
    .then(init=>console.log(init)
    ))
   
   //let path = fetch('https://api.weatherbit.io/v2.0/forecast/daily?&key=16632115da314485b772f3d91c04d1aa')

   


