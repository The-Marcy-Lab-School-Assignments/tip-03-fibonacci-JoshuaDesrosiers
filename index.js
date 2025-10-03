// Prints the first n Fibonacci numbers
const printFibonacci = (n) => {
 fibo=[0,1]
 for(let x=0;x<n;x++){
    x<=1?'':fibo[x]=fibo[x-1]+fibo[x-2]
 }
 console.log(fibo)
}

printFibonacci(5);  // should print 0, 1, 1, 2, 3
printFibonacci(10); // should print 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
