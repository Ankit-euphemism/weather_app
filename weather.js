const api_key= "api_key";

async function getWeather() {
    const city= document.getElementById("cityInput").value;

    if(!city){
        alert("Please Enter a city map");
        return;
    }
    await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
}

async function getLocationWeather() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const {latitude, longitude}= position.coords;
            await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
        }, (error) => {
            console.error(error);
            alert('Unable to fetch location.');
            alert(error);
        });
    } else {
        alert('Geolocation not supported by your browser.');
    }
}
async function fetchWeather(url) {
    try{
    const response= await fetch(url);
    const data= await response.json();

    if(data.cod== 200){
        const weatherHtml= `
        <h2>${data.name},${data.sys.country}</h2>
        <br>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        <br>
        <p> <b>Temperature:</b> ${data.main.temp} degree celsius</p>
        <br>
        <p> <b>Feels like:</b> ${data.main.feels_like}</p>
        <br>
        <p> <b>Weather:</b> ${data.weather[0].description}</p>
        <br>
        <p><b>Humidity:</b> ${data.main.humidity}%</p>
        <br>
        `;

        document.getElementById("weatherResult").innerHTML= weatherHtml;
    }
    }
    catch (error){
    console.error("Error fetching data ",error);
    alert(error);
    document.getElementById("weatherResult").innerHTML= `<p>Error while fetching  the data.<p>`;
    }
}
    document.getElementById("themetoggle").addEventListener("click",()=>{
        document.body.classList.toggle("dark")
        });
