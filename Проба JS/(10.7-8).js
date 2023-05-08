/*Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let myMap = new Map();
 myMap.set("black", "Car");
 myMap.set("V", 8000);
 myMap.set( "age" , 2);  
 myMap.set(true, false);

 for (let [key, value] of myMap) {
  console.log(`ключ ${key} , Значение ${value}`);
   
}
 