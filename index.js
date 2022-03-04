//q=London&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=dhemaji&appid=f29c5cc1f41a35ee93bea631c7315693
const weatherApi = {
  key:"f29c5cc1f41a35ee93bea631c7315693",
  baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
if(event.keyCode == 13){
  console.log(searchInputBox.value); 
  getWeatherReport(searchInputBox.value);
}
});

function getWeatherReport(city){
fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`).then((weather) => {
  return weather.json();
}).then(showWeatherReport);
}

function showWeatherReport(weather){
  console.log(weather);
  let city = document.getElementById('city');
  city.innerText = `${weather.name},${weather.sys.country}`;

  let tempreture = document.getElementById('temp');
  tempreture.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById('min-max');
  minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  let weatherType = document.getElementById('weather');
  weatherType.innerHTML = `${weather.weather[0].description}`;

  let date = document.getElementById('date');
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);

  date.innerText = dateManage(todayDate);

  if(weatherType.textContent == 'light snow'){
    document.body.style.backgroundImage = "url('https://media.istockphoto.com/photos/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-picture-id1289449088?b=1&k=20&m=1289449088&s=170667a&w=0&h=A3NqjfBFMq3UQDFcvEKoKfA9N6zJd-OJuIg05vFB4NM=')";
  }
  if(weatherType.textContent == 'broken clouds'){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')"
  }
  
}

function dateManage(dateAvg){
let days = ["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
let months = ["Jan", "Feb", "March","April","May","June","July","August","September","Octuber","Nov","Dec"];
let year  = dateAvg.getFullYear();
let month = months[dateAvg.getMonth()];
let date = dateAvg.getDate();
let day  = days[dateAvg.getDay()];

return `${date} ${month} (${day}),${year}`;
}

