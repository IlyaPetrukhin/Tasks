function initMap() {
  let autocomplete = document.getElementById('autocomplete')
  autocomplete = new google.maps.places.Autocomplete(autocomplete)
  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    if(place.geometry && place.geometry.location ){
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      requestWeather(lat,lng)
    }
  });
}
function requestWeather(lat,lng) {
  let answer = fetch('http://api.weatherbit.io/v2.0/forecast/daily?lat='+lat+'&lon='+lng+'&key=16632115da314485b772f3d91c04d1aa')
    .then(response => response.json())
    .then(function (init) {
      console.log(init.data)
      const html = init.data.map(user => {
          return `<tr>
        <th scope='row'>${user.valid_date}</th>
        <td>${user.high_temp}</td>
        <td>${user.weather.description}</td>
        </tr> `
        })
        .join('')
      document.querySelector('#app')
        .insertAdjacentHTML('afterend', html)
    })
    .catch(error => {
      console.log(error)
    })
}