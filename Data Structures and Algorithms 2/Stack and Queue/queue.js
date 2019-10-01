class Node{
    constructor(value){
        this.next = null;
        this.value = value;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val);
        //If queue is empty
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            //Add the new Node at the Ending
            let temp = this.last;
            temp.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue(){
        //if queue is empty return undefined
        if(!this.first) return undefined;
        //Pop from the beginning
        let removedNode = this.first;
        this.first = removedNode.next;
        removedNode.next = null;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        this.size--;
        return removedNode.value;
    }

    traverse(){
        let current = this.first;
        let arr = [];
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

let q1 = new Queue();
q1.enqueue(100);
q1.enqueue(200);
q1.enqueue(300);
q1.enqueue(400);
q1.traverse();

console.log(q1.dequeue());