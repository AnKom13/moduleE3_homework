/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, 
например, знаки, null и так далее.
*/
function countEvenOddZero(arr) {
    let even = 0, odd = 0, zero = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) { zero++; continue }
            if (arr[i] % 2) { odd++; continue } else { even++ }
        }
    }
    //    console.log('Четных - ' +even+', нечетных - ' +odd+', нули - '+ zero)
    console.log(`Четных - ${even}, нечетных - ${odd}, нули - ${zero}`)
}
let arr = [1, 2, 22, 3, 14, 4, NaN, 5, 6, 0, 7, 8, 9, 'dd', null, 0]
countEvenOddZero(arr)