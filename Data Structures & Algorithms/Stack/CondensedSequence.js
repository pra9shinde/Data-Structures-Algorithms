//Here output should be 56
//We are going to remove the numbers which come side by side eg 22 then remove both
//let number = '54322346';
let number = '54322346';
let condenseArray = [];
let top = undefined;

function condenseSequence(number){
    for(let i = 0; i < number.length; i++){
        if(top === undefined){
            condenseArray.push(number[i]);
            top = condenseArray[condenseArray.length - 1];
        }
        else if(number[i] == top){
            condenseArray.pop();
            //condenseArray.push(number[i]);
            top = condenseArray[condenseArray.length - 1];
        }
        else{
             condenseArray.push(number[i]);
             top = condenseArray[condenseArray.length - 1];
        }
        
    }
}

condenseSequence(number);
console.log(condenseArray);
