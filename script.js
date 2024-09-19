// получаем элемент динозаврика по его ID
const dino = document.getElementById("dino");

// функция прыжка
function jump() {
    // проверяем, не находится ли динозаврик в прыжке
    if (dino.classList !== "jump") {
        // добавляем класс jump для начала анимации прыжка
        dino.classList.add("jump");

        // удаляем класс jump через 300 миллисекунд, чтобы завершить прыжок
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

// добавляем обработчик событий
document.addEventListener("keydown", function (event) {
    // проверяем, была ли нажата клавиша пробела
    if (event.key === " ") {
        // если пробел нажат, вызываем функцию jump()
        jump();
    }
});

// Получаем элемент кактуса по его ID
const cactus = document.getElementById("cactus");

// Устанавливаем интервал для проверки состояния игры каждые 10 мс
let isAlive = setInterval(function () {
    // Получаем текущую y-позицию динозаврика
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));

    let dinoWidth = parseInt(window.getComputedStyle(dino).getPropertyValue("width"));

    let dinoHeight = parseInt(window.getComputedStyle(dino).getPropertyValue("height"));

    let cactusHeight = parseInt(window.getComputedStyle(cactus).getPropertyValue("height"));

    // Получаем текущую x-позицию кактуса
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Проверяем условия столкновения:
    // кактус находится в пределах 50 пикселей от динозаврика по оси x,
    // кактус ещё не прошёл динозаврика, и динозаврик не прыгнул высоко
    if ((cactusLeft > dinoLeft && cactusLeft < dinoLeft + dinoWidth) && cactusLeft > 0 && dinoTop >= 300) {
        // Если произошло столкновение, выводим сообщение
        alert("Потрачено!");
    }
}, 10);
