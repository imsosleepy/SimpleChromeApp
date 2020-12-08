const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '4a8866f99be03478e1377fbfdcf1019b';
//'241051bf13976dd3ddf8b8d9f247255e'
//'4a8866f99be03478e1377fbfdcf1019b';

function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(function(reponse){
        return reponse.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const weatherText = json.weather[0]['main'];
        const place = json.name;
        weather.innerText = `${temperature}℃ ${weatherText} in  ${place}`
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
       latitude,
       longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else {
        // get Weather
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();