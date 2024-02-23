var cityName;
function check() {
  cityName = document.getElementById("cityname").value;
  console.log(cityName);
  checkWeather();
}

async function checkWeather() {
  const apikey = "bee0076bba405cb5cbb0f4b7fc60dbc0";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=;metric&q=${cityName}`;

  const resp = await fetch(apiurl + `&appid=${apikey}`);
  var data = await resp.json();
  if(resp.status == 404)
  {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    document.getElementById("cityname").value = "";
    return ;
  }
  document.querySelector('.error').style.display = 'none';
  document.querySelector(".city").innerHTML = data.name;
  var temp = Math.floor((data.main.temp - 273.15));
  document.querySelector(".temp").innerHTML = `${temp}°C` ;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  var wicon = document.querySelector(".weather-icon");
  switch(data.weather[0].main)
  {
    case "Clear":
      wicon.src = "https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png";
      break;
    case "Clouds":
      wicon.src = "https://static.vecteezy.com/system/resources/thumbnails/024/533/991/small/sun-with-clouds-denoting-concept-of-weather-in-trendy-style-premium-icon-vector.jpg";
      break;
    case "Rain":
      wicon.src = "https://t4.ftcdn.net/jpg/03/38/74/43/360_F_338744374_c8v4RyKnToRWqPA4SalFf8ktaMQA48QW.jpg";
      break;
    case "Drizzle":
      wicon.src = "https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png";
      break;
    case "Mist":
      wicon.src = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-foggy-sunny-512.png";
      break;
    case "Snow":
      wicon.src = "https://cdn4.vectorstock.com/i/1000x1000/75/33/cute-cloud-with-snow-and-cold-weather-vector-17337533.jpg";
      break;
    case "Wind":
      wicon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25GzhvGC93PPeMTI3ixrW-6XjHguueoIayw&usqp=CAU";
      break;
    default :
      wicon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQv6nMPE-G7_Wez_cN81MgiVXDYi5jYqeBA8e07zAOlH5PKAcfXnqxmRds5f_NEEN1F0&usqp=CAU";
   
      
  }
  
  
  var block = document.querySelector('.weather');
  block.style = "display:block"
  document.getElementById("cityname").value = "";
  
}