//This function will return the element of the specified index in reverse order
// EG: no is 1234 index of 0 will be 4. This is required for radix sort
function getDigit(num,place){
   return  Math.floor(Math.abs(num)/ Math.pow(10,place)) % 10;
}

//this function will return the length of the number. i.e how manay digits are present in the number
function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//This function will return the maximum length of a number in an given array
function maxDigits(nums){
    let maxDig = 0;
    for(let num of nums){
        maxDig = Math.max(maxDig,digitCount(num));
    }
    return maxDig;
}

function radixSort(nums){
    let maxDigitCount = maxDigits(nums);
    //Maximum iteration will be maxDigitCount
    for(let k = 0; k < maxDigitCount; k++){
        //create a array with 0 to 9 index and each element in it is an empty array
        let digitBuckets = Array.from({length : 10}, () => []);

        //Loop over each number present in an array
        for(let i = 0; i < nums.length; i++){
            //get the digit of current K value
            let currentDigit = getDigit(nums[i],k);
            //Push the array element in its respective index of K
            digitBuckets[currentDigit].push(nums[i]);
        }

        //Now the ordering is done, we will create a 1D array of digiBuckets and assign it to the nums variable
        //Loop through each element of buckets array and push those values in the new array i.e nums 
        nums = [].concat(...digitBuckets);
    }
}


//console.log(getDigit(-1234,3));
//console.log(digitCount(12344));
//console.log(maxDigits([1,2,10]));

radixSort([23,345,5467,12,2345,9853]);