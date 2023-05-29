$(document).ready(function() {
    // Получаем погоду
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=d00ba7c853a2bbca2284c3dc9c8e93df',
        method: 'GET',
        success: function(data) {
            $('#temperature').text(data.main.temp + ' °C');
            let iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            $('#weather-icon').attr('src', iconUrl);
        }
    });

    // Получаем время
    function updateTime() {
        var now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Kiev' }));
        $('#current-time').text(now.toLocaleTimeString('ru-RU'));
    }
    updateTime();
    setInterval(updateTime, 1000);  // Обновляем время каждую секунду

    // Получить курс валют
    $.ajax({
        url: "https://api.exchangerate-api.com/v4/latest/USD", // API для курса валют
        method: "GET",
        success: function(data) {
            $("#currency").html("1 долар = " + data.rates.UAH + " гривень");
        }
    });
});