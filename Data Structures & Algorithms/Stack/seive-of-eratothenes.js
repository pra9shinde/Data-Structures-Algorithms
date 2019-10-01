//Find prime numbers between the range using queues
//1st queue q1 consist all the numbers
//take first item of q1 and push that into the prime p1 queue
//divide each number of q1 by that first number
//if number is not divisible add it in the queue q2
//After q1 task is completed make the q2 as q1 now and follow the same procedure



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


function seive(n){

    let q1 = new Queue();
    let q2 = new Queue();
    let prime = [];


    //1st queue q1 consist all the numbers
    for(let i = 2; i < n; i++){
        q1.enqueue(i);
    }

    while(!q1.isEmpty()){
         //take first item of q1 and push that into the prime p1 queue
        let firstNo = q1.dequeue()
        prime.push(firstNo);
        //console.log("first no",firstNo);

        //divide each number of q1 by that first number
        while(!q1.isEmpty()){
            let item = q1.dequeue();
            //if number is not divisible add it in the queue q2
            if(item % firstNo !== 0){
                q2.enqueue(item);
                //console.log("inserted in q2 - " + item);
            }
        }
        //After q1 task is completed make the q2 as q1 now and follow the same procedure
        q1 = q2;
        q2 = new Queue();
    }
    return prime;
}

console.log(seive(15));