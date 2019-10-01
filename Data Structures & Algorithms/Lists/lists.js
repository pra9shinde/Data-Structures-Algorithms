//List are similar to arrays but are more organized and more functionality
//Lists size is 0 at the beginning. Once the value is pushed its size is increased
//Arrays are fixed size

 
class List{
    constructor(){
        console.log("Created");
        this.data = new Array(10);
        this.size = 0;// In Lists whenever value is added into the list it's size is increased
    }

    //method to push the value at the end of the list
    push(value){
        //check if the current array is full
        if(this.size === this.data.length){
            //create a new array with double size of existing array and copy old values into this new array
            this.grow();
        }
        this.data[this.size] = value;
        this.size++;
    }

    grow(){
        let aa = new Array(this.data.length * 2);
        for(let i = 0; i < this.data.length; i++){
            aa[i] = this.data[i]; //copy old array values into new array
        }
        this.data = aa; // this newly created array name should be same hence data = aa to avoid using two different arrays
    }

    remove(removeIndex){
        let removed = this.data[removeIndex];
        //Delete the specified value and shift the values towards left.
        //Actually we are not deleting here but we are simply simply replacing the values by shifting towards left
        //We are going to start shifting from current index
        //We are going to stop size-1 because that element will be our last element to shift
        for(let i = removeIndex; i < this.size -1 ; i++){
            this.data[i] = this.data[i + 1]; //Shifting left by assigning next value to current index
        }
        //Manually make the extra data which is shifted to null
        this.data[this.size - 1] = null;

        this.size--;//reduce the size of the list
        return removed;
    }

    //add number before the specified index
    add(addIndex, value){
        //increase the size of the array
        if(this.size === this.data.length){
            this.grow();
        }
        //Shift Right
        for(let i = this.size ; i > addIndex; i--){
            this.data[i] = this.data[i - 1];  
        }
        //add Value after shifting
        this.data[addIndex] = value;
        this.size++;
    }

    //Check Whether Value contains in the array
    contains(searchValue){

        for(let i = 0; i <= this.size ; i++){
            if(this.data[i] === searchValue){
                return true;
            }
        }
        return false;
    }

    //Get the value of the specified index
    get(index){
        if(index < this.size){
            return this.data[index];
        }
        return null;
    }

    //Set or change the existing value of the element
    set(index,value){
        if(index >= 0 && index < this.size){
            return this.data[index] = value;
        }
        return null;
    }

    //to Display the list
    toString(){
        if(this.size === 0){
            return "[]";
        }
        else{
            let result = "";
            for(let i = 0; i < this.size; i++){
                result += this.data[i] + " ";
            }
            return "[" + result +"]";
        }
    }

    concat(passedList){
        
        for(let i = 0; i < passedList.size; i++){
            this.data.push(passedList.get(i));
        }
        return this.data;
    }

}

const ll = new List();


