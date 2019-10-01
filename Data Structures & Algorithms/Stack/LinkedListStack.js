class StackNode{
    constructor(data,next){
       this.data = data;
       this.next = next;
    }
}

class LinkedListArray{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    isEmpty(){
        return this.top === null;
    }

    push(value){
        let node = new StackNode(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop(){
        let result = this.top;
        this.top = this.top.next;
        console.log(this.top);
        this.size--;
        return result.data;
    }

    peek(){
        return this.top.data;
    }

    size(){
        return this.size;
    }
}

let ss = new LinkedListArray();
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);


while(!ss.isEmpty()){
    let value = ss.pop();
    console.log(`Value = ${value}`);
}

console.log("Hello World");
