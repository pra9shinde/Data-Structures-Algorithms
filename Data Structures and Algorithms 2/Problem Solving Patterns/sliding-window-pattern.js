//User will pass an array and a num(index)
//Do addition of the numbers within this index i.e count
//Perform the operation in whole loop and return the maximum 
//Normal method will be using loop within loop 
//WE will do it with O(N)


//Solution : 
//take 2 variables to store sums - temp and main sum
//if array's length is less than the num passed then return null
//Start a forr loop start with 1st element of array and end at the num count
    //Do addition and store it inside a sum variable
//now store the above sum in temp sum 
//Start a for loop starting from index of num till the end of the loop
    //We aready have the sum of first nums hence instead of adding all the next nums
    //We will subtract the unwanted value from the previous sum and add the required value i.e next value and store it in temp sum
    //Take max of tempsum and maxsum and store it in maxsum
//Return the maxsum
function maxSubarraySum(arr,num){
    let tempSum = 0;
    let maxSum = 0;
    if(arr.length < num){
        return null;
    }
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3));