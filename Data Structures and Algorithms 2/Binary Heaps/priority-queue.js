const util = require('util');
//Using MinBinary Heap Implementation
class PNode{
    constructor(data,priority){
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val,priority){
        //Push the value inside the queue
        let newNode = new PNode(val,priority);
        this.values.push(newNode);

        //Track the index of the newly pushed value
        let index = this.values.length - 1;
        //Store the pushed value in variable
        const pushedValue = this.values[index];

        while(index > 0){
            let parentIdx = Math.floor((index - 1)/2);//Find Parent Index
            let parent = this.values[parentIdx];//Store parent value

            //Check if Pushed value is smaller than parent
            if(pushedValue.priority <= parent.priority){
                //Swap the position
                this.values[index] = parent;
                this.values[parentIdx] = pushedValue;
                index = parentIdx;//Update the index to keep track of pushed value index to check if its new parent is greater or not.
            }
            else{
                break;
            }
        }
    }

    dequeue(){
        //Swap the First Element of the array with Last Array
        let temp = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values[this.values.length - 1] = temp;
        //Pop the last element which is the max
        let minElement = this.values.pop();
        //Loop till first element find its correct position
        let index = 0;
        let element = this.values[0];
        
        while(index < this.values.length){
            //Find the Childrens of the First Element of the array
            let firstChildIdx = (2 * index) + 1;
            let secondChildIdx = (2 * index) + 2;
            let firstchild,secondchild;
            let swap = null;//Flag will be used to exit loop if child is smaller than parent and if its greater its index is stored in this variable

            //Check whether index is in the array range - First Child
            if(firstChildIdx < this.values.length){
                firstchild = this.values[firstChildIdx];
                //check if firstchild is greater than the first element
                if(firstchild.priority < element.priority){
                    swap = firstChildIdx;//swap is required hence store the index of swap position
                }
            }  
            
            //Check whether index is in the array range - Second Child
            if(secondChildIdx < this.values.length){
                secondchild = this.values[secondChildIdx];
                //Check if the second child is max
                if((secondchild.priority < element.priority && swap === null) || (swap !== null && secondchild.priority < firstchild.priority)){
                    swap = secondChildIdx;
                }
            }

            if(swap === null) break;//Break the loop if there isnt any swapping required
            //Swap the first element with the swap index child
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;

        }
        return minElement;
    
    }


}


let er = new PriorityQueue();
er.enqueue("Common Cold",5);
er.enqueue("Gun Shot",1);
er.enqueue("High Fever",4);
er.enqueue("Broker Arm",2);
er.enqueue("Glass in Foot",3);
console.log(util.inspect(er, false, null, true));

er.dequeue();
console.log(util.inspect(er,false,null,true));

