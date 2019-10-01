//this class represents each single node of the list
//this class is extremely simple
//this class does not have methods, manually operations are needed
class ListNode{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}


//this class represents entire list
//this class has a property root which only represents the first node of the list
//this class has methods that operates over entire list from root
class LinkedList{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    //returns true or false if there are any nodes inside the list
    isEmpty(){
        return this.root === null;
    }
    //add a value to the front of the list
    prepend(data){
        //if there arent any nodes
        if(this.root === null){
            this.root = new ListNode(data);//directly add node to the root
        }
        else{
            let node = new ListNode(data);//create a new node
            node.next = this.root;//attach newly created node's next to existing root node(new->old)
            this.root = node;//now make newly added node as root node
        }
        this.size++;
    }

    //gives the size of the list
    length(){
        let current = this.root;
        let count = 0;
        while(current != null){
            count++;
            current = current.next;
        }
        return count;
    }

    //gives the value present at the index
    get(index){
        let current = this.root;
        let count = 0;
        while(current != null){
            if(count === index){
                return current.data;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    removeAtIndex(index){
        //prevent false values which are out of index of the list
        if(index < 0 || index >= this.size){
            return;
        }
        //deletion can be at the first node of the list
        if(index == 0){
            this.removeFront();
        }
        //if deletion is at the middle or last of the list
        else{
            this.removeRest(index);
        }
        this.size--;
    }

    removeFront(){
        //take root
        //point it to next node
        if(this.root !== null){
            this.root = this.root.next;
        }
    }

    removeRest(index){
        let current = this.root;
        let count = 0;
        //start reading the nodes from start
        //stop at the node present before the passed index
        //to break its link and point out to next of next(which will delete the passed index node) 
        while(current != null && count < index - 1){
            current = current.next;
            count++;
        }
        //above loops current value will be node present before the passed index node
        //now link that node with nex to next node(node present after the passed index node)
        current.next = current.next.next;
    }

    //adds the value at the specified index
    addAtIndex(index,value){
        if(index === 0){
            this.prepend(value);
        }
        else{
            let current = this.root;
            let count = 0;
            //set current value to node which is present before the passed index
            while(current != null && count < index -1){
                count++;
                current = current.next;
            }

            let node = new ListNode(value);
            node.next = current.next;//link new node next pointer to the current.next(pointer of the node which was present before the passed index)
            current.next = node;//index - 1 node's next pointer connected to newly created node node
        }
        size++;
    }

    //returns values in string format
    toString(){
        let result = "root -> ";
        let current = this.root;
        while (current != null){
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";
    }
}

let list = new LinkedList();
console.log(list.toString());
list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
console.log(list.toString());

console.log(list.length());
console.log(list.get(1));