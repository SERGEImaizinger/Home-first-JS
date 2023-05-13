
let arr = [25, 0, 0, 33, null, 'упс', 0, NaN, 4, 5, 6, 28, "", NaN, 12, 17];
let arr2 = [17, 12, 16, NaN, 0, 0];
let arr3 = [null,'упс', 2, 3, 58 ]

function getResultValues(arr){
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
 
console.log(`четных-${even}, не четных-${notEven}, нулей-${zero}, значений NaN-${nan}  `);
 } 
           getResultValues(arr);
          getResultValues(arr2);
           getResultValues(arr3);