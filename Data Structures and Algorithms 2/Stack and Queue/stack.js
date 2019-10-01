class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.length = 0;
        this.first = null;
        this.last = null;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this.length;
    }

    pop(){
        if(!this.first) return undefined;
        let removed = this.first;
        let secondNode = this.first.next;
        this.first = null;
        this.first = secondNode;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        this.length--;
        return removed.value;
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

let s1 = new Stack();
console.log(s1.push(100));
console.log(s1.push(200));
console.log(s1.push(300));
s1.traverse();
console.log(s1.pop());
s1.traverse();