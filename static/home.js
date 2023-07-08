
$(function () {
    $("#submit").on("click", function (e) {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/submit",
            dataType: "json",
            data: {
                "location": $("#location").val()
            },
            success: function (result, status, xhr) {
                var jsonResult = JSON.stringify(result);
                var response = JSON.parse(result);
                $("#results").text(jsonResult);
                $("#prettyResults").append(`<h1 id="city"> ${response.location.name}, ${response.location.region} </h1>`);
                var date = new Date(response.location.localtime.substring(0, 10));
                const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                var observation_time = response.current.observation_time;
                if (observation_time[0] == '0') {
                    observation_time = observation_time.substring(1);
                }
                $("#prettyResults").append(`<h2> ${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${observation_time}`);
                $("#prettyResults").append(`<p> The weather is currently ${response.current.weather_descriptions} and ${response.current.temperature} degrees`);
                $("#prettyResults").append(`<img src="${response.current.weather_icons}"`);
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        })
    })
});