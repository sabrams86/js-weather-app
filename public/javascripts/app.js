var xhr = new XMLHttpRequest;
xhr.open('get', 'http://www.telize.com/geoip?', true);
xhr.addEventListener('load', function(){

var button = document.getElementsByClassName('button')[0];
button.addEventListener('click', function(){
  event.preventDefault();
  var location = document.getElementsByClassName('input')[0].value;
  var req = new XMLHttpRequest;
  req.open('get', 'http://api.openweathermap.org/data/2.5/weather?q='+location);
  req.addEventListener('load', function(){
    var weatherResult = JSON.parse(req.response);
    var weather = document.getElementsByClassName('weather')[0];
    weather.innerHTML = weatherResult.weather[0].description;
  });
  req.send();
});
  var result = JSON.parse(xhr.response);
  var ip = document.getElementsByClassName('ip')[0];
  var ipContent = ip.innerHTML;
  ip.innerHTML = ipContent+" "+result.ip;

  var long = document.getElementsByClassName('long')[0];
  var longContent = long.innerHTML;
  long.innerHTML = longContent+" "+result.longitude+'&deg';

  var lat = document.getElementsByClassName('lat')[0];
  var latContent = lat.innerHTML;
  lat.innerHTML = latContent+" "+result.latitude+'&deg';
});
xhr.send();
