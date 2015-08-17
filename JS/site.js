$(document).ready(function() {

    $("#searchButton").click(function() {

        var cityName = $("#citySearch").val();

        // 1. Make a call to the Origin Weather API using $.get
        $.get('http://originweather.azurewebsites.net/weather/city?name=' + cityName, function(data){
           $("#location").text(data.location);
           $("#summary").text(data.summary);
           $("#temperature").text(data.temperature);
           $("#stormDistance").text(data.nearestStorm);
           
           $("#weatherIcon").attr('src', 'images/' + data.icon + '.png');
           });  
                    // 2. In the callback function you pass to $.get, add code that changes the text of the HTML elements you created in index.html to the relevant pieces of data returned by the API.

    });

});