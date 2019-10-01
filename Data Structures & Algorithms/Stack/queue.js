class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.tail = null;
    }

    isEmpty(){
        return this.front === null;
    }

    enqueue(value){
        //create a new node
        let node = new Node(value);
        if(this.front === null){
            //means list is empty it's front and tail is this node 
            this.front = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;//adding the node to the end of the list which is tail
            this.tail = node; //This is not the last node in the list
        } 
    }

    dequeue(){
        if(this.front === null){
            return null;
        }
        let result = this.front.data;
        
        if(this.front === this.tail){
            //If there is only one node left in the list
            this.front = null;
            this.tail = null;
        }
        else{
            this.front = this.front.next;//Remove the current front and assign the front to the next node
        }
        return result;
    }
}

let qq = new Queue();
qq.enqueue("A");
qq.enqueue("B");

while(!qq.isEmpty()){
console.log(qq.dequeue());
}