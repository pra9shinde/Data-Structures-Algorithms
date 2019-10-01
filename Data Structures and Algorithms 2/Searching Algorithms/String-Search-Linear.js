//Find the no.of times passed substring present in the main string
//Eg : wowomgzomg, substring is omg. O/p is 2

function subStringSearch(str,subString){
    //Start a For loop in main string
    //Loop over the shorter string
    //If the Characters didnt match then exit the inner loop
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < subString; j++){
            //In order to check the j's value with I's + 1 value we add i and j
            //Compare substring with main string. If it doesnt matches then break the loop and go to next char of main string
            if(str[i + j] !== subString[j]){
                break;
            }
            //Inner Loop reached to last index of substring hence it matched all the substring. Increase the count
            if(j === subString.length - 1){
                count++;
            }
        }
    }
    return count;
}