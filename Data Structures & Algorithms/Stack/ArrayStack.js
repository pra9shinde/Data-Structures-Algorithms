export class arrayStack{
    constructor(){
        this.data = [];
        this.size = 0;
        // this.top = null;
    }

    isEmpty(){
        return this.size === 0;
    }

    length(){
        return this.size;
    }

    push(value){
        this.data.push(value);
        this.size++;
        //console.log(this.top);
        return this.top;
    }

    pop(){
        let result = this.data[this.size - 1];
        this.data[this.size - 1] = null;
        this.size--;
        return result;
    }

    peek(){
        return this.data[this.size - 1];
    }
}

let ss = new arrayStack();
ss.push(100);