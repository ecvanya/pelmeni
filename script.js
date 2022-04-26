let elMap = document.getElementById('loc');
let msg = 'Определение местонахождения невозможно.';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    elMap.textContent = 'Определение местонахождения...';
}
else {
    elMap.textContent = msg;
}

function success(location) {
    msg = '<p>Долгота: ';
    msg += location.coords.longitude + '</p>';
    msg += '<p>Широта: ';
    msg += location.coords.latitude + '</p>';
    elMap.innerHTML = msg;
}

function fail(msg) {
    elMap.textContent = msg;
    console.log(msg.code);
}