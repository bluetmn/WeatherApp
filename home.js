
// window.onload = function() {
//     document.getElementById("submit").addEventListener("click", getWeather);
// }

// const getWeather = async() => {
//     const response = await fetch("http://api.weatherstack.com/current", {
//                                     method: 'POST',
//                                     headers: {
//                                         'access_key': '28c03c04c02ad342cfe1f011a031d02b',
//                                         'query' : 'New York'
//                                     }
//                                 });
//     const myJson = await response.json();
//     const result = JSON.stringify(myJson);
//     document.getElementById("results").innerHTML = result;
// }

$(document).ready(function () {
    $("#submit").click(function (e) {
        $.ajax({
            type: "POST",
            url: "https://api.weatherstack.com/current",
            dataType: "json",
            success: function (result, status, xhr) {
                var jsonResult = JSON.stringify(result);
                $("#results").text(jsonResult);
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        })
    })
});