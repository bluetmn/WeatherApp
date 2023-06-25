
window.onload = function() {
    document.getElementById("submit").addEventListener("click", getWeather);
}

const getWeather = async() => {
    const response = await fetch("http://api.weatherstack.com/current");
    const myJson = await response.json();
    const result = JSON.stringify(myJson);
    document.getElementById("results").innerHTML = result;
}