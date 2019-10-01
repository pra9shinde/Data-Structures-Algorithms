//People Standing in a circle after each number n person is removed
//Eg ABCDEF are standing and n is 4 , first D will be removed then B and so on

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
        this.size = 0;
    }

    isEmpty(){
        return this.front === null;
    }

    enqueue(value){
        this.size++;
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
        this.size--;
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

function josephusQueue(choices,n){
    let qq = new Queue();

    //Insert Values into the Queue
    for(let choice of choices){
        console.log(choice);
        qq.enqueue(choice);
    }

    let count = 0;
    while(qq.size > 1){
        if(count == n - 1){
            let removed = qq.dequeue();
            count = 0;
            console.log(removed);
        }
        count++;
    }

    console.log(qq);
}

let choices = "ABCDEF".split("");
console.log(josephusQueue(choices,2));