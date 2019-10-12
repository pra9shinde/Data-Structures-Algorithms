//Binary Heaps are stored in the array
//They have two childs 
//in MaxHeap parent is always greater than child
//To find the childrens of aparent in the heap list or array formula is 2N+1 and 2N+2 (N is index of Parent)
//To find the parent of a child formula is Floor(index 0f child - 1)/2

class BinaryHeap{
    constructor(){
        this.heapList = [ 41, 39, 33, 18, 27, 12];
    }

    insert(value){
        //push the new value at the end of the heaparray
        this.heapList.push(value);
        let index = this.heapList.length - 1;//get index of newly pushed value and this will always keep updating the postion of the pushed value
        const pushedValue = this.heapList[index];//store the pushed value in variable
        //Loop while the index is greater than zero
        while(index > 0){
            let parentIdx = Math.floor((index - 1)/2);//Find Parent Index
            let parent = this.heapList[parentIdx];//Store parent value
            //Check if pushed value is greater than its parent
            if(pushedValue > parent){
                //swap
                this.heapList[parentIdx] = pushedValue;
                this.heapList[index] = parent;
                index = parentIdx;//now update the index varibale because of swap and this variable keeps track of its position. It will help to now compare the new position with its new parent
            }
            else{
                break;//Pushed value is not greater hence break the loop
            }
        } 
    }

    //Removes the top element from the queue and rearrange the queue again in correct order
    maxOut(){
        //Swap the First Element of the array with Last Array
        let temp = this.heapList[0];
        this.heapList[0] = this.heapList[this.heapList.length - 1];
        this.heapList[this.heapList.length - 1] = temp;
        //Pop the last element which is the max
        let maxElement = this.heapList.pop();
        //Loop till first element find its correct position
        let index = 0;
        let element = this.heapList[0];
        
        while(index < this.heapList.length){
            //Find the Childrens of the First Element of the array
            let firstChildIdx = (2 * index) + 1;
            let secondChildIdx = (2 * index) + 2;
            let firstchild,secondchild;
            let swap = null;//Flag will be used to exit loop if child is smaller than parent and if its greater its index is stored in this variable

            //Check whether index is in the array range - First Child
            if(firstChildIdx < this.heapList.length){
                firstchild = this.heapList[firstChildIdx];
                //check if firstchild is greater than the first element
                if(firstchild > element){
                    swap = firstChildIdx;//swap is required hence store the index of swap position
                }
            }  
            
            //Check whether index is in the array range - Second Child
            if(secondChildIdx < this.heapList.length){
                secondchild = this.heapList[secondChildIdx];
                //Check if the second child is max
                if((secondchild > element && swap === null) || (swap !== null && secondchild > firstchild)){
                    swap = secondChildIdx;
                }
            }

            if(swap === null) break;//Break the loop if there isnt any swapping required
            //Swap the first element with the swap index child
            this.heapList[index] = this.heapList[swap];
            this.heapList[swap] = element;
            index = swap;

        }
        return maxElement;
    }
}

let heap1 = new BinaryHeap();
heap1.insert(55);

console.log(heap1.heapList);

heap1.maxOut();
console.log(heap1.heapList);

heap1.maxOut();
console.log(heap1.heapList);