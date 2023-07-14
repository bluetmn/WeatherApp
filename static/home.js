
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
                // $("#results").text(jsonResult);
                console.log(jsonResult);
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
                
                if (JSON.stringify(response.current.weather_descriptions).toLowerCase().indexOf("sunny") !== -1) {
                    $('body').css('background-image', 'url("static/sunny.png")');
                    $('body').css('background-repeat', 'no-repeat');
                    $('body').css('background-position', '120% 60%');
                }
                else if (JSON.stringify(response.current.weather_descriptions).toLowerCase().indexOf("cloudy") !== -1) {
                    $('body').css('background-image', 'url("static/cloudy.png")');
                    $('body').css('background-repeat', 'no-repeat');
                    $('body').css('background-position', '100% 10%');
                    $('body').css('background-size', '35% 100%');
                }
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        })
    })
});