//Create a Function which will accept 2 parameters
//First Array will contain some numbers
//Second Array should contain there squares
//Our Function Should Check Whether the 2 arrays are coorect or not
//Note : If user passes first array as [2,2] then second array should have 2 4's

//If we approach this with normal method (loop inside Loop for searchin) then it will be   Big O(N^2)

//Hence we will create a function of Big O of N

/***** Solution *******/

function same(arr1,arr2){
    //If the length of two arrays are not equal return false
    if(arr1.length !== arr2.length){
        return false;
    }

    //Create two objects   
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //Start a loop for the arrays which will save the value of the array as key and no.of iterations as value in the created object
    for(let val of arr1){
         //Check if value already present
        //If Already present increment the value by 1
        //else add the key 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    //Do the same for second array
    for(let val of arr2){
       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    //Iterate through first object
    for(let key in frequencyCounter1){
        console.log(frequencyCounter1);
        console.log(frequencyCounter2);
        //Square the key and check if Key^2 is not present in second object then return false
        if(!(key ** 2 in frequencyCounter1)){
            return false;
        }

        //Check the no.of interations of the object1 == object2 (the values should be same). If not return false
        if(frequencyCounter1[key] !== frequencyCounter1[key ** 2]){
            return false;
        }
        //Return True
        return true;
    }

}

console.log(same([1,2,1],[1,1,4]));





