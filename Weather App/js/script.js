let tempData, userInput;

const $cityName = $('#cityName');
const $temperature = $('#temperature');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $input = $('input[type="text"]')

$("form").on("submit", handleGetData);

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=e83d4ba5cbd1aacd9a5dca849448927b'
    }).then(
        (data) => {
            // console.log(data)
            tempData = data;
            render();
        },
        (error) => {
            console.log('bad request', error);
        }

    )
}

function render() {
    $cityName.html(tempData.name);
    $temperature.html(parseInt(tempData.main.temp) + '&deg;');
    $feelsLike.html(parseInt(tempData.main.feels_like) + '&deg;');
    $weather.html(tempData.weather[0].main);
    $('span').html(`<img src="http://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png">`)

}