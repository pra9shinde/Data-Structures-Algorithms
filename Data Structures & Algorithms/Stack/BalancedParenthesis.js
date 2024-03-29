//We are going to check whether enter syntax is correct or not using stack
//In order to check it we are going to do following steps
    //EG : (())     
    // Step 1 - If the bracket is Opening Bracket then we are going to  Push it into stack
    //Step 2 - If the bracket is closing bracket then we will peek into the stack and check the value is opening bracket or not. If Yes We will Pop that .
    //Step 3 - If at the end array is empty then the Syntax is correct and balanced

import { arrayStack } from './ArrayStack.js';

let ss = new arrayStack();


function validateSyntax(value){
    for(let i = 0; i < value.length; i++){
        if(value[i] === "("){
            //console.log("Opening");
            ss.push(value[i]);
        }
        else if(value[i] === ")"){
            //console.log("Closing");
            let peek = ss.peek();
            if(ss.length() === 0){
                return false;
            } 
            else if(peek === "("){
                ss.pop();
            }
            else{
                return false;
            }
        }
    }

   return ss.length() === 0;
}

console.log(validateSyntax("()"));