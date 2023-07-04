
$(function () {
    $("#submit").on("click", function (e) {
        alert("submit button press")
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/submit",
            dataType: "json",
            data: {
                "location": $("#location")
            },
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