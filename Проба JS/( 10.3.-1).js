
/*Напишите программу, которая работала бы следующим образом: в prompt вводится значение. 
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.*/



const result = prompt('Введите  число')

if (result===null){
   console.log('Вы не ввели значение')
 }
 
 else if(result.replace(/ /g,"")== ""){
   console.log('Вы ввели пустое значение')}



   else if (typeof +result !== 'number') {
  console.log('Упс, кажется, вы ошиблись')
} else if (isNaN(result % 2)) {
   console.log('Ошибка, введено НЕ ЧИСЛО')
} else if (result % 2 === 0) {
   console.log('Число четное')
} else {
   console.log('число нечетное')
}
   