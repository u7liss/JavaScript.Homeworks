// #Jg0gPO00

// створити код конвертора ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок



const input = document.getElementById('conv');
const resultDiv = document.getElementById('result');

input.addEventListener('input', function () {

    resultDiv.innerText = String(+this.value * 2.2);
});

