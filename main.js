
// Task1 A function which prints str after n seconds.

function printTimeout(str, n) {
const printTimeout = setTimeout( () => {console.log('Task1',str)}, n*1000);
return printTimeout
}
printTimeout('hello', 10);

// Task2 A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
let sumAll = n*(n+1)/2;
console.log (sumAll, '- сумма чисел от 0 до',n);
}
sumAll(2);
sumAll(4);

//Task3 A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
    for (i=time ;; i--) {
  console.log(i);
  if (i<1) break;
    }
    return console.log (str);
    }
bombTimer('Boooom', 3);

//Task4 A function which returns factorial of number using recursion.

function factorial(n) { 
return (n !=1) ? n*factorial(n-1):1;
}
console.log (factorial(3),'факториал');
console.log (factorial(5),'факториал');

// Task 5 Implement function from task №3 (bombTimer) using recursion and setTimeout.

function bombTimer2(str, time) {
    let n = time;
let timer = setInterval (() => {
    if (n>=0) {console.log(n); n--;}else{
        console.log(str);
        clearInterval(timer);
    }
},2000); 
    }
bombTimer2('Boooom', 5);