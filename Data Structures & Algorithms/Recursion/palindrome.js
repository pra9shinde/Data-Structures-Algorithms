function checkPalim(str){
    if(str.length !== 0){
        let startIndex = 0;
        let endIndex = str.length - 1;
        if(str.length == 1){
            //Length 1 Strings are always Palindrome
            return true;
        }
        else if(str[startIndex] != str[endIndex]){
            //First and Last Letter of the String didnt Matched
            return false;
        }
        else{
            //First And Last Characters Matched
            //Hence Remove Those Characters and Recur the Function for Remaining String
            str = str.substring(1, str.length-1);
            checkPalim(str);
        }
        return true
    }  
}
console.log(checkPalim("121"));