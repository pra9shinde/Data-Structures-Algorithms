//Bubble Sort is comparing 2values and push the highest at the end

//We will require 2 loops
    //1st for the passes (no of times we start the loop again from zero)
    //2nd for comparing the array elements with its next element
//Passes will always be length of array - 1. Because since sorted element is pushed to the end, so it will always be sorted only.

function bubbleSort(arr){
    //First Loop is for passes. We need to pass each item of the array for bubble sort.
    for(let i = 0; i < arr.length - 1; i++){
        let noSwap = 0;
        console.log("Pass" + i);
        for(let j = 0; j < (arr.length - 1) - i; j++){//subtracting extra -1, in order to avoid the rechecking the element which are already sorted and pushed to the end
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = 1;
            }
        }
        //If there is no swaping in then exit the Main loop instead of going to next pass
        if(noSwap === 0){
            break;  
        } 
    }
    console.log(arr);
}

bubbleSort([37,45,29,8]);

