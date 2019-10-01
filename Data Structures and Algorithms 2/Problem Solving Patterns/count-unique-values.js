//Find unique nos in an array with Big O(N) instead of N^2
//accept a sorted array
//start pointer for left and compare it with next value which will be right pointer
//if both nos are same the move then move the right pointer +1
//if values are not equal then they are unique then move the left +1 and make the value of left pointer = right pointer, so that we will have a new value to check right side
function checkUnique(arr){
    let left = 0;

    for(let right = 1; right < arr.length; j++){
        if(arr[left] !== arr[right]){
            i++;
            arr[i] = arr[right];
        }
    }
    return i + 1;
}

checkUnique([1,1,2,3,4,5,6,6,8]) // o/p : 7 unique values