const util = require('util');
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val); 
        //If the tree is empty make it as root         
        if(!this.root){
            this.root = newNode;
            return this;
        } 
        //Tree is not empty Check whether the value is less than or greater than the root
        let current = this.root;
        while(true){
            //Value already present in the tree
            if(val === current.value) return undefined;
            //If value is smaller traverse left of the root - Left Side
            if(val < current.value){
                //If the left is null then insert
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                //Else traverse Left most and check again
                    current = current.left;
            }
            //If the value is greate thean the root then traverse right side 
            else{
                //If the right is null then insert
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                //Else traverse and follow the same procedure till it gets vacant place
                    current = current.right;
            }
        }
    }

    search(val){
        //If the value is equal return true
        let current = this.root;
        let found = false;
        //Loop till we find the value
        while(!found){
            if(current === null) return false;//value not found
            else if(current.value === val){
                found = true;
                return current;
            } 
            //If the value is less than traverse left
            else if(val < current.value){
                console.log("Left");
                current = current.left;
            }
            //Else Traverse right
            else{
                console.log("Right");
                current = current.right;
            }
        }
    }

    BFS(){
        //Create empty array to store the BFS result
        let data = [];
        //Create queue for pushing nodes into the queue;
        let queue = [];
        let node = this.root;
        //Push the root in queue
        queue.push(node);
        //Loop till queue has values
        while(queue.length){
            //Remove item from the queue
           node = queue.shift();
           //and Add it in the result data array
           data.push(node.value);
           //If node has left child add it to the queue
           if(node.left) queue.push(node.left);
           //If node has right child add it to the queue
           if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        //Create a empty array to keep track and save visited nodes and return the result
        let data = [];
        let current = this.root;

        //Helper function which pushes the node value into the visited array
        function traverse(node){
            data.push(node.value);
            //If Node has left property, recurse and push its left side value
            if(node.left) traverse(node.left);
            //If Node has Right property, recurse and push its right side value
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){
        let data = [];
        let current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);    
        }
        traverse(current);
        return data;
    }

    DFSPreOrder(){
        let data = [];
        let current = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);    
        }
        traverse(current);
        return data;
    }
}

let t1 = new BinarySearchTree();
t1.insert(10);
t1.insert(6);
t1.insert(15);
t1.insert(3);
t1.insert(8);
t1.insert(20);
//console.log(util.inspect(t1, false, null, true));

//console.log(t1.search(100));

//console.log(t1.BFS());

//console.log(t1.DFSPreOrder());

console.log(t1.DFSPostOrder());