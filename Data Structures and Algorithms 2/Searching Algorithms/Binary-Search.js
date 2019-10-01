function binarySearch(arr,searchValue){
    //Create the variables which will track the start and end indexes of the array
    let start = 0;
    let end = arr.length - 1;
    //Find the middle of the start and the end index.
    let middle = Math.floor((start + end) / 2);

    //we will loop until the middle value is not equal to searchvalue
    //break the loop into pieces till we find the value
    while(arr[middle] !== searchValue && start <= end){
        //if the value is less than middle then ingore right side by changing the end to previous index of middle. 
        if(searchValue < middle){
            end = middle - 1;
        }
        //else ignore the left section by changing the start the index to middle
        else{
            start = middle + 1;
        }
        //find the new middle index of the divided section
        middle = Math.floor((start + end) / 2);
    }
    //Since value didnt entered the while loop, means our search value is equal to middle index. Hence return the index.
     //If Value is not present in the array hence return -1
    return arr[middle] === searchValue ? middle : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30],100));