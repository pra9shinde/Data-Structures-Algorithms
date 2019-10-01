function insertionSort(arr){
    //Start Picking Second Element
    //Compare Second Element with Previous Elements and swap if necessary
    //Continue to the next element and if it is in the incorrect order, iterate through sorted positions  to place the element in the correct position
    //Repeat until array is sorted

    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
            console.log(arr,arr[i],arr[j]);
            arr[j +1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));