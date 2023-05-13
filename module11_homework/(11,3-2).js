let getNumber=+prompt(`введите число до 1000`);


function isPrime(num) {
   if ( num === 1 || num === 0 || num > 1000) { return "данные неверны";           
  }  for (let i = 2; i < num; i++) {
     if (num % i === 0) return "Непростое";
  }
  return  "Простое"  ;
}
 
   console,log(isPrime(getNumber)); 