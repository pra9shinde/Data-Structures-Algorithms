//take a an array as input.
//find the min and max from that array
//create another array which will start the values from min to start indexes. Then store the total number of times it is repeated in its index value
//EG: if 1 is repeated 4 times the store value 4 in index 1
//Then after creating the above array print the array into asc format
//EG: [0,0,1,1,1,1,2,5,7] -> we can see how 4 times one is printed. No need to push the values which arent there



//Create an ramdom array
 function randomArray(size,max){
     const result = new Array(size);
     for(let i = 0; i < result.length; i++){
         result[i] = Math.floor(max * Math.random());
     }
     return result;
 }


 function tallySort(array){
     //find max number in array
    let max = new Array(0);
    for(let i = 0; i<array.length; i++){
         max = Math.max(max,array[i]);
    }
    
    //create an array to tally occurences of each number from min to max
    let tally = new Array(max);
    for(let i = 0; i<array.length; i++){
        //look at the number in the array
        let value = array[i];

        //use the value of the number as an index of array and start if value of that index is undefined
        if(tally[value] === undefined){
            tally[value] = 0;//setting the value 0 because its undefined.
        }
        tally[value]++; //incrementing how many times we have seen the number
    }

    //return an array that fills out the array acording to the tally as if they are sorted
    let result = new Array(array.length);//reslt array 
    let index = 0; //starting index of result array for pushing the reapeated i.e tally values
    for(let i = 0; i < tally.length; i++){
        //fetch all values from tally array
        let occurences = tally[i];
        //to store how many times nmber was repeated
        let repeatation = 0;
        
        while(repeatation < occurences){
            //run while all the occurences are pushed into the result array
             result[index] = i;
             index++;
             //result.push(i);
             repeatation++;
        }
    }
    return result;
}


let array = randomArray(10,100);
console.log(array);
 let bb = tallySort(array);
 console.log("****");
 console.log(bb);

