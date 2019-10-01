//Recursion means fucntion calling itself again with different data and a exit case
//We will do addition of a number using recursion


function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(4));
/***Explaination ****/
//1 - I need to stop when the num goes to 1. So we return 1 when the value of num is 1
//1 - Else we return num + recurse function with - 1. Because in order to find the addition of 4, I should know the addition of 3. Hence 3 (num - 1) will be passed to func again.
// Then In order to get the result of 3 I need to know the result of 2, hence we recurse the function 
//Like this we recurse the function till we reach the 1.

//Simple Explaination is
 //Lets say number is 4
 //Recursion will start from 4 to 1.
 //First 1's result will be returned, then 2's,then 3's and finally it will be added to 4's result.