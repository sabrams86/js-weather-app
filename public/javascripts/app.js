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
});
xhr.send();
