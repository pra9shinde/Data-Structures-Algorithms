//Accept 2 sorted arrays, length of the arrays may be quite different
//Keep on blank result array to store the values
//Start Comparing first element of first array with 1st element of 2nd array
    //If the 1st value is small then push that value in result array
    //increase the index of that array
    //compare that with the first item of second array
    //If the second array value is smaller then push it into result array and increase second array counter


function merge(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        console.log(arr1[i],arr2[j]);
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }    
        else{
            result.push(arr2[j]);
            j++
        }  
    }   
    //console.log("Indexes",i,j);

    //While Loops to iterate the remaining items because one of the array might be smaller in size
    //we have the latest end index of i and j above. Hence we will loop through remaining items of both arrays and push them.Because we dont know which one is bigger.
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

//console.log(merge([1,10,50],[2,14,99,100]));

function splitMergeArray(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    //Gives First half of the array and recurse it till it reaches 1 element array
    let left = splitMergeArray(arr.slice(0,mid));
    //Gives from mid to end of the array and recurse it till it reaches 1 element array
    let right = splitMergeArray(arr.slice(mid));
    //Once the Splitting is Done call merge fucntion which will sort the passed arrays and return it
    return merge(left,right);
}

console.log(splitMergeArray([10,24,76,73,1,9]));