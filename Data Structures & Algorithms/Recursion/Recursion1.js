// function foo(count){
//     console.log("Hello",count);
//     foo(count + 1);
// }

// foo(0);


//Recursive function for an array

function iterate(arr,index = 0){
    if(index < arr.length){
        console.log(arr[index]);
        iterate(arr,index+1);
    }
}

iterate([1,2,3,4]);