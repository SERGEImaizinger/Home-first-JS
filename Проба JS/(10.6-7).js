/*Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.*/




let arr = [25, 0, 0, 33, null, 'упс', 0, NaN, 4, 5, 6, 28, "", NaN, 12, 17];
let arrNumber = [];

for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        arrNumber.push(arr[i]);

    };

};


let even = 0;
let notEven = 0;
let zero = 0;
let nan = 0;


for (i = 0; i < arrNumber.length; i++) {
    if (isNaN(arrNumber[i])) {
        nan++;
    } else if (arrNumber[i] % 2 === 0 && arrNumber[i] !== 0) {
        even++;
    } else if (arrNumber[i] === 0) {
        zero++;
    }
    else {
        notEven++;
    }
}
console.log(arr);
console.log(`четных-${even}, не четных-${notEven}, нулей-${zero}, значений NaN-${nan}  `);