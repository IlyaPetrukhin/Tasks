

var info = document.getElementById('infowindow-content')
let weather = document.getElementById('weather')
function initMap() {
  let autocomplete = document.getElementById('autocomplete')
   autocomplete = new google.maps.places.Autocomplete(autocomplete)
   }
info.addEventListener('click',function(){
     
     let answer = fetch('http://api.weatherbit.io/v2.0/forecast/daily?city='+weather.value+'&key=16632115da314485b772f3d91c04d1aa')
    .then(response=>response.json())
    .then(function(init){
      console.log(init.data)
      const html = init.data.map(user=>{
        return `<tr>
        <th scope='row'>${user.valid_date}</th>
        <td>${user.high_temp}</td>
        <td>${user.weather.description}</td>
        </tr> `
      })
      .join('')
      document.querySelector('#app')
              .insertAdjacentHTML('afterend',html)

      })
      .catch(error=>{
        console.log(error)
      })
    })


   


