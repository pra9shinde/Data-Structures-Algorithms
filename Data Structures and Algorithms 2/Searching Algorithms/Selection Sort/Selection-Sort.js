//In Selection Short - minimum value is holded in each pass, and the smallest is swaped at the beginning. Each value is compared in a pass. Minimum value is stored in varable.once we reach the end of the pass then Minimum value is swapped at the beginning.

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        let noSwap = 0;
        console.log("Pass" + i);
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
            console.log(arr,`${arr[i]},${arr[j]}, Smallest : ${arr[smallest]}`);
        }
        //Swap the smallest and place at the beginning.
        if(smallest !== arr[0]){
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
            noSwap = 1;
        }
        if(noSwap === 0){
            break;
        }
    }

    return arr;
}

console.log(selectionSort([34,22,10,19,17]));