//Create a class for a node
//contains value and pointer to next node

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        //Create a node for the value
        let n1 = new Node(val);
        if(!this.head){
            //If it is the first item then make this as head and tail
            this.head = n1;
            this.tail = n1;
        }
        else{
            //else put the value at the end means next of tail
            this.tail.next = n1;
            this.tail = n1; //now the tail should be the inserted node
        }
        this.length++; //increase the length of the list
        return this;
    }

    pop(){
        if(!this.head){
            return undefined;
        }

        //Loop through Second Last Node and check if the next of it is null
        //create temp variable which will storre the previous value. If the current is null then previous value is not incremented
        let current = this.head;
        let previous = current;
        while(current.next){
           previous = current;
           current = current.next;           
        }
        //console.log(previous);
        //Make the previous value's next as null
        previous.next == null;
        //set previous as tail
        this.tail = previous;
        this.tail.next = null;
        this.length--;

        //If Linked List becomes empty after popping then set head and tail to null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;//return the popped element
    }

    //Remove 1st item
    shift(){
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return current;
    }

    //Insert at beginning
    unshift(val){
        let n1 = new Node(val);
        if(!this.head){
            this.head = n1;
            this.tail = n1;
        }
        else{
            n1.next = this.head;
            this.head = n1;
        }
        this.length++;
        return this;
    }

    //Returns the value present at passed index node
    get(index){
        if(index < 0 || index > this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while(current){
            if(counter === index) return current;
            current = current.next;
            counter++;
        }
    }

    //change the value of the specified node index
    set(index,value){
        let find = this.get(index);
        if(find){
            find.val = value;
            return value;
        }
        return undefined;
    }

    //Insert Value at specified index
    insert(index,value){
        //If index is less than 0 or greater than length return undefined
        if(index < 0 || index > this.length) return undefined;
        //If index = 0, then use unshift method
        else if(index === 0) return this.unshift(value);
        //If index = length use push method
        else if(index === this.length) return this.push(value);
        //else
        else{
            //use get method and traverse till one index less than it is passed
            let previous = this.get(index-1);
            //store the next of one index less in a temp variable
            let previousNext = previous.next;
            //create new node
            let n1 = new Node(value);
            //one index less next will be new node
            previous.next = n1;
            //new node next will be temp variable
            n1.next = previousNext;
        }
        this.length++;
        return this;
    }

    //Remove at specified index
    remove(index){
        //If index is less than 0 or greater than length return undefined
        if(index < 0 || index > this.length) return undefined;
        else if(index === 0) return this.shift();
        //If index = length use pop method
        else if(index === this.length) return this.pop();
        //else
        else{
            let previous = this.get(index-1);
            let nextOfPassedIndex = previous.next.next;
            previous.next = nextOfPassedIndex;
        }
        this.length--;
        return this;
    }

    traverse(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse(){
        //swap head and tail
        let node = this.head;//Current Node
        this.head = this.tail;
        this.tail = node;

        //Create variable to store the next of current node
        let nextNode;
        //Set Previous node as null as we will start the iteration from head, it's previous will be null
        let prevNode = null;

        //Iterate the linked list till 
        while(node){
            console.log("node : " + node.val);
            //store next of current node
            nextNode = node.next;
            //assign current node's next value as previous. This is main logic to reverse the next pointer.
            node.next = prevNode;
            //now Shift the previous indicator 1 node ahead
            prevNode = node; 
            //shift the current indicator 1 node ahead
            node = nextNode;
        }
    }
}

let l1 = new SinglyLinkedList();
l1.push(1);
l1.push(10);
l1.push(123);
//console.log(l1);
// console.log(l1.head);
// console.log(l1.head.next);
// console.log(l1.head.next.next);


// console.log(l1.pop());
// console.log(l1);

// console.log(l1.shift());
// console.log(l1);

// console.log(l1);
// console.log("*****");
// console.log(l1.unshift(200));

//console.log(l1.get(1));

// console.log(l1.set(10,500));
// console.log(l1);

//console.log(l1.insert(1,900));
// console.log(l1.traverse());

//console.log(l1.remove(1));

l1.traverse();
console.log(l1.reverse());
console.log(l1);
l1.traverse();

