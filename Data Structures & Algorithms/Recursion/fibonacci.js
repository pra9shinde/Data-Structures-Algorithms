//Fibonacci Numbers : 1 1 2 3 5 8 13 21 34 55
//fibonacci(10) will return 10th value i.e 55
//Formula to find fibonacci calculation is (n - 1) + (n - 2)

function fibonacci(n){
    if(n === 1 || n === 2){
        return 1;
    } 
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }    
}

console.log(fibonacci(3));