
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
                $("#prettyResults").append(`<h1> ${response.location.name}, ${response.location.region} </h1>`);
                var date = new Date(response.location.localtime.substring(0, 10));
                const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                alert(date.getDay());
                alert(date.getMonth());
                alert(date.getTime());
                $("#prettyResults").append(`<h2> ${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${response.current.observation_time}`);
                $("#prettyResults").append(`<p> The weather is currently ${response.current.weather_descriptions} and ${response.current.temperature} degrees`);
                $("#prettyResults").append(`<img src="${response.current.weather_icons}"`);
            },
            error: function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        })
    })
});