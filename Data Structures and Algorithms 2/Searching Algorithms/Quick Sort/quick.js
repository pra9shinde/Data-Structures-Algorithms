const swap = (arr,i,j) => { 
    [arr[i],arr[j]] = [arr[j],arr[i]];
};

function partition(arr,start=0,end=arr.length-1){
    //First Element will be pivot element
    let pivot = arr[start];
    //Save the swap index to swap the pivot at its position
    let swapIndex = start;

    //We will start comparing pivot with the each array element
    //If the current element is smaller than pivot then we need to bring it on left side
    //Inorder to do that we will increment the swapindex and swap the smaller element with swapindex.
    /**** EG -
        1 - [4,8,2,1,5,7,6,3] //Compare 4 with 8, do nothing.
        2 - compare4 with 2, 2 is smaller than pivot so increment the swapindex and swap the array element with swapindex
         O/p will be [4,2,8,1,5,7,6,3]
    /*** */
    //In this Loop all the greater elements will be on the right and smaller will be on left and we will also get the final index for the pivot element to swap.
    for(let i = start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr,swapIndex,i);
            //console.log(arr);
        }
    }
    //After the Loop is Ended we will get the final swap index required for pivot element to swap hence swap it.
    swap(arr,start,swapIndex);
    return swapIndex;
}

//console.log(partition([9,4,8,2,1,5,7,6,3]));

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = partition(arr,left,right);
        quickSort(arr,left,pivotIdx - 1);
        quickSort(arr,pivotIdx + 1,right); 
    }
    return arr;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));