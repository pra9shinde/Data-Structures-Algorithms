class Node{
    constructor(val){
        this.prev = null;
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }
        else{
            //Make newly created node and place it after tail
            //next of current tail should point new node
            this.tail.next = node;
            //prev pointer of new node should point to that tail
            node.prev = this.tail;
            //Make this newly created node as new tail
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            //Get the previous node of the tail
            let previousNode = this.tail.prev;
            //make the next of that previous node as null
            previousNode.next = null;
            //Remove the Prev Linkage of Tail
            this.tail.prev = null;
            //set that previous node as tail
            this.tail = previousNode;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.tail = newNode;
            this.head = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    get(index){
        if(index < 0 || index > this.length - 1) return undefined;
        //If the passed index in near to head then traverse from the beginning
        let currentIndex;
        let currentNode;
        if(index <= Math.floor(this.length / 2)){
           
            currentIndex = 0;
            currentNode = this.head;
            while(currentNode){
                if(currentIndex === index) return currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }
        }
        else{
            //Else traverse from the end
            currentIndex = this.length - 1;
            currentNode = this.tail;
            while(currentNode){
                if(currentIndex === index) return currentNode;
                currentNode = currentNode.prev;
                currentIndex--;
            }
        }
    }

    set(index,value){
        let result = this.get(index);
        if(result){
            result.val = value;
            return result;
        }
    }

    insert(index,value){
        if(index < 0 || index > this.length - 1) return undefined;
        if(index === 0) return this.unshift(value);//Insert at Beginiing
        if(index === this.length) return this.push(value);
        
        //use get method to traverse till passed index
        let currentNode = this.get(index);
        //Store the previous node of currentNode in a variable for linkage
        let beforeNode = currentNode.prev;
        //Create New Node
        let newNode = new Node(value);
        //set beforeNode's next as new node
        beforeNode.next = newNode;
        //Set newNode's previois as beforeNode
        newNode.prev = beforeNode;
        //Set NewNode next as currentNode(Old Node present at that index)
        newNode.next = currentNode;
        //Set CurrentNode's Prev as newNode
        currentNode.prev = newNode;
    }

    remove(index){
        if(index < 0 || index > this.length - 1) return undefined;
        //use get method to traverse till passed index
        let currentNode = this.get(index);
        let beforeNode = currentNode.prev;
        let afterNode = currentNode.next;

        //Set the beforeNode next = after node
        beforeNode.next = afterNode;
        //Set afterNode next = before Node
        afterNode.prev = beforeNode;
        //Remove all the linkages of current Node
        currentNode.next = null;
        currentNode.prev = null;
    }

    traverse(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

let l1 = new DoublyLinkedList();
l1.push(1);
l1.push(2);
l1.push(3);
l1.push(4);
l1.traverse();
//console.log(l1);

// l1.pop();
// l1.pop();
// l1.traverse();

//l1.shift();
//l1.traverse();

//l1.unshift(10);
//l1.traverse();

//console.log(l1.get(2));

//l1.set(1,200);
//l1.traverse();

l1.insert(2,500);
l1.traverse();

l1.remove(2);
l1.traverse();