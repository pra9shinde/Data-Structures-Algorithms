//Function that accepts sorted array of integers
//Function should find a pair where sum is 0
//Return Undefined if the sum of the pair is not 0
//eg : [-3,-2,-1,0,1,2,3] = true 

// [1,2,3] = undefined

//Solution
//Since our array is sorted we will start to counts at a same time
// we will start 1 count from left and one from right
//check sum of left and right is 0 or not
//If the sum is > 0 then we will do right -- 
//else left++

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left],arr[right]];
        }
        else if (sum > 0){
            right--;
        }
        else{
            left++;
        }
    }
}