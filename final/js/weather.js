function GetInfo() {

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=Bethesda,%20US&appid=a1bc0d679a47ff766efb40d74d3b608b")
    .then(response => response.json())
    .then(data => {
      for (i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "desc").innerHTML = "Description: " + (data.list[i].weather[0].description)
      }
      for (i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "humidity").innerHTML = "Humidity: " + Number(data.list[i].main.humidity)
      }
      for (i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
      }
      for (i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
      }
      for (i = 0; i < 3; i++) {
        document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon
          + ".png";
      }
      for (i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "weather").innerHTML = "Temp: " + Number(data.list[i].main.temp - 273.15).toFixed(1) + "°";
      }
    })
}
GetInfo();