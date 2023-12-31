/*
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
*/
/* Здесь setInterval запускает анонимную функцию с интервалом 1 сек
clearInterval(timerId) прерывает действие функции

Вызов setInterval вернёт идентификатор, который можно очистить, 
если вы передумали выполнять регулярное действие.

ВАЖНО! Эти методы работают не очень предсказуемо: если задать выполнение действие в setTimeout
 с нулевой задержкой, в 99% случаев оно выполняется не сразу. 
Это связано с таким понятием, как Event loop. 
*/
function example(a, b) {
    let curr = a;

    let timerId = setInterval(
        function () {
            console.log(curr);

            if (curr == b) { clearInterval(timerId) }
            curr++;
        }, 1000);
}


//пример через стрелочную функцию
function example1(a, b) {
    let curr = a;

    let timerId = setInterval(
        () => {
            console.log(curr);

            if (curr == b) { clearInterval(timerId) }
            curr++;
        }, 1000);
}

example1(5, 15);
//example(5, 15);