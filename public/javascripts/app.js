var xhr = new XMLHttpRequest;
xhr.open('get', 'http://www.telize.com/geoip?', true);
xhr.addEventListener('load', function(){

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

  var xhr2 = new XMLHttpRequest;
  xhr2.open('get', 'http://api.openweathermap.org/data/2.5/weather?lat='+result.latitude+'&lon='+result.longitude);
  xhr2.addEventListener('load', function(){
    var weatherResult = JSON.parse(xhr2.response);
    setBackground(weatherResult.weather[0].id);
    var weather = document.getElementsByClassName('weather')[0];
    weather.innerHTML = weatherResult.weather[0].description;
  });
  xhr2.send();

  var button = document.getElementsByClassName('button')[0];
  button.addEventListener('click', function(){
    event.preventDefault();
    var location = document.getElementsByClassName('input')[0].value;
    var req = new XMLHttpRequest;
    req.open('get', 'http://api.openweathermap.org/data/2.5/weather?q='+location);
    req.addEventListener('load', function(){
      var weatherResult = JSON.parse(req.response);
      setBackground(weatherResult.weather[0].id);
      var weather = document.getElementsByClassName('weather')[0];
      weather.innerHTML = weatherResult.weather[0].description;
    });
    req.send();
  });

});
xhr.send();

var setBackground = function(code){
  var background = document.getElementsByTagName('body')[0];
    if (code < 300){
      background.style.backgroundImage = 'url(\'images/thunderstorm.jpg\')';
    } else if (code < 600){
      background.style.backgroundImage = 'url(\'images/rain.jpg\')';
    } else if (code < 700){
      background.style.backgroundImage = 'url(\'images/snow.jpg\')';
    } else if (code < 802){
      background.style.backgroundImage = 'url(\'images/sunny.jpg\')';
    } else if (code < 900){
      background.style.backgroundImage = 'url(\'images/cloudy.jpg\')';
    } else {
      background.style.backgroundImage = 'url(\'images/sunny.jpg\')';
    }
}
