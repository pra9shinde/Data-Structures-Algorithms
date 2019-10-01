class ArrayList{
    constructor(){
        this.data = new Array(10);
        this.size = 0;
    }

    // is Big O(1) notation
    //it always takes contant amount of time to run
    //no mater how many element are present in array
    size(){
        return this.size;
    }


    // is Big O(1) notation
    //it always takes contant amount of time to append
    append(data){
        this.data[this.size] = data;
        this.size++;
    }

    // is Big O(n) notation
    //it takes time as per the index of the for loop
    //if the elements are more it will take more time
    removeAtIndex(index){
        for(let i = index ; i < this.size-1; i++){
            this.data[i] = this.data[i + 1];
        }
        this.data[this.size - 1] = null;//make last one null
        size--;
    }

    //return true if there is a duplicate value present inside the array
    // is Big O(N^2)
    //this will take longer with the ratio of N^2 amount  of the time per N items in an array
    checkDuplicates(){
        //two loops to compare one value with other all elements present inside the loop
        for(let i = 0;i < this.size; i++){
            for(let j = 0; j < this.size; j++){
                //stop preventing duplicate check with itself
                if(i != j && this.data[i] === this.data[j]){
                    return true;
                }
            }
        }
        return false;
    }
}