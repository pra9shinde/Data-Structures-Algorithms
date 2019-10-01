
//subract each 2 numbers and show the maximum Delta value
const ww = [70 , 80 , 60 , 45 , 60 , 67 , 66];
let maxDelta = Math.abs(ww[0] - ww[1]);//abs will return the absolute value, turn negative into positive

let deltaIndexStart = 0;
let deltaIndexEnd = 1;

for(let i=1; i<ww.length; i++){
    let delta = Math.abs(ww[i] - ww[i - 1]);
    if(delta >= maxDelta){
        maxDelta = delta;
        deltaIndexStart = i;
        deltaIndexEnd = i +1; 
    }
    console.log(`Taking index ${i} and ${i-1} and delt value is ${delta}`);
}

console.log(maxDelta + "Delta index is [" + deltaIndexStart + "]["+ deltaIndexEnd + "]");

//Will accept the array as an argument and return the sum of the Delta
function sumDelta(array){
    let deltaTotal = 0;
    for(let i=1; i<array.length; i++){
        let deltaValue = Math.abs(array[i] - array[i - 1]);
        deltaTotal += deltaValue;
    }
    return deltaTotal;   
}

sumDelta([1,2,3,4]);


//Search the value inside the array and return the boolean result

function findInArray(arr, SearchValue){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === SearchValue){
            return true;
        }
        return false;
    }
}

findInArray([1,2,3],1);

//returns true if the array is in ascending order
function isSorted(array){
    for(let i = 1; i < array.length; i++){
        if(array[i] < array[i - 1]){
            return false;
        }
    }
    return true;
}

//Check Ascending as well as Descending
function isArraySorted(array){
    let isAscending = true;
    let isDescending = true;
    for(let i = 1; i < array.length; i++){
        let value1 = array[i-1];
        let value2 = array[i];

        //array sequence is in descending
        if(value2 < value1){
            isAscending = false;
        }
        //array sequence is in ascending form
        else if(value2 > value1){
            isDescending = false;
        }
    }
    return isAscending || isDescending;
}


//Multiple Current element of 2D array with its above,below,right and left value and give the max out of them
    let mulArray = [
        [12,26,93,84],
        [67,23,32,46],
        [53,75,88,67],
        [41,26,39,48]
    ];

    let maximum = mulArray[0][0] * mulArray[0][1];

    //to display the two array elements which has largest product
    let row1 = 0;
    let col1 = 0;
    let row2 = 0;
    let col2 = 1; 

    function largestProduct(mulArray){   
        for(let row = 0; row < mulArray.length; row++){
            for(let col = 0; col < mulArray[row].length; col++){
                updateLargest(row,col,row,col-1);//left
                updateLargest(row,col,row,col+1);//right
                updateLargest(row,col,row-1,col);//top
                updateLargest(row,col,row+1,col);//bottom cell
            }
        }
        console.log(mulArray[row1][col1], "*", mulArray[row2][col2], "=", maximum);
    }

    function updateLargest(r1,c1,r2,c2){
        let value = getCell(mulArray,r1,c1);
        let secondValue = getCell(mulArray,r2,c2);
        if(value * secondValue > maximum){
            maximum = value * secondValue;
            row1 = r1;
            col1 = c1;
            row2 = r2;
            col2 = c2;
        }
    }

    //gives specified cell values 
    //returns 0 if the cell is out of bound
    function getCell(arr,row,col){
        //prevent going negative value
       if(row < 0 || col < 0){
           return 0;
       }

       if(row >= arr.length){
           return 0;
       }
       if(col >= arr[row].length){
           return 0;
       }

       return arr[row][col];
   }
/***********/