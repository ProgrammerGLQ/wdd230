const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org//data/2.5/weather?q=Fairbanks&units=imperial&appid=27e55f40ed15d7f417d0fbc82ffd8c32`;
async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
;        }
    } catch (error) {
        console.log(error);
    }    
}
apiFetch();
function displayResults(weatherdata){
    currentTemp.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    
    const icon = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const description = weatherdata.weather[0].main;
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;


}