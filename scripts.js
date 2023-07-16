let tg = window.Telegram.WebApp;
tg.expand()

function getParams (url = window.location) {
    let params = {};

    new URL(url).searchParams.forEach(function (val, key) {
        params[key] = val; // Пушим пары ключ / значение (key / value) в объект
    });
    
    return params;
}

console.log(getParams())
paragraph = document.querySelector("p");
paragraph.innerHTML = `Параметр 'parametr': ${getParams()['parametr']}`;