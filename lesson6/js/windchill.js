const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =`https://api.openweathermap.org//data/2.5/weather?q=Buenos Aires&units=imperial&appid=27e55f40ed15d7f417d0fbc82ffd8c32`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const windspeed = document.querySelector("#windspeed");

    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}`;
    windspeed.innerHTML = `${data.wind.speed}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;


    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.innerHTML = desc;



      // calculate wind chill

      let tempCel = document.querySelector("#temp").innerHTML;
      tempCel = (tempCel- 32) * (5/9);
      const speed = document.querySelector("#windspeed").innerHTML;

      const tempFah = tempCel * 9 / 5 + 32;
      let windchillFah = 35.74 + 0.6215 * tempFah - 35.75 * speed ** 0.16 + 0.4275 * tempFah * speed ** 0.16;
      windchillCel = ((windchillFah - 32) * 5 / 9).toFixed(1);

      if (tempCel > 10 || speed < 3) {
          windchillCel = "N/A"
          document.querySelector("#windchill").innerHTML = windchillCel
 
      } else {
      windchillCel = (windchillCel * 1.8) + 32

      document.querySelector("#windchill").innerHTML = `${windchillCel}F`}

});