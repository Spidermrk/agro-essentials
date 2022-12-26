function getweather(){
    var city = document.getElementById("city").value;
    url="https://api.ambeedata.com/latest/by-city?city="+city;
    console.log(url)
    data='{"message": "success","data": [{"scantime": "2022-07-24 08:48:11Z","soil_temperature": 24.249993896484398,"soil_moisture": 29}]}';
    params={
	"method": "GET",
	"headers": {
		"x-api-key": "f01a902d4c06963693e5934fd7bcf3388fbc13988a246c767811e8605d008716",
		"Content-type": "application/json"
	}}
    fetch(url,params).then((response)=>{return response.text();}).then((data)=>{console.log(data)})
}
getweather()
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  function getlocation()
{
    var lat=document.getElementById("latitude").value;
    var long=document.getElementById("longitude").value;
    fetch("https://api.ambeedata.com/weather/latest/by-lat-lng?lat="+lat+"&lng"+long, {
	"method": "GET",
	"headers": {
		"x-api-key":"f01a902d4c06963693e5934fd7bcf3388fbc13988a246c767811e8605d008716",
		"Content-type": "application/json"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}