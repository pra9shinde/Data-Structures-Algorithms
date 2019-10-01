class treeNode{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }

    add(value){
        if(this.root === null){
            this.root = new treeNode(value);
        }
        else{
            this._add(this.root,value);
        }
    }

    _add(node,value){
        //Check if the value is less than tha node and doesnt have left branch
        if(value < node.data && node.left === null){
            node.left = new treeNode(value);
        }
        //Check if the value is greater than tha node and doesnt have right branch
        else if(value >= node.data && node.right === null){
            node.right = new treeNode(value);
        }
        else if(value < node.data){
            //Node has a left branch,so travel left side recursively till empty branch
            this._add(node.left,value);
        }
        else{
            //Node has a right branch, travel right recursively till empty branch
            this._add(node.right,value);
        }
    }

    collect(){
        return this._collect(this.root,[]);
    }

    _collect(node,result){
        if(node === null){
            return result;
        }
        result.push(node.data);
        this._collect(node.left,result);
        this._collect(node.right,result);
        return result;
    }

    //Search the data in binary search tree
    contains(value){
        return this._contains(this.root,value);
    }

    //It should be Big O(log2 N) time complexity
    //If the value is less search in left side else on right side
    _contains(node,value){
        if(node === null){
            return false;
        }
        else if(node.data === value){
            return true;
        }
        else if(value < node.data){
            console.log("Searching Left");
           return this._contains(node.left,value);
        }
        else{
            console.log("Searching Right");
           return this._contains(node.right,value);
        }
    }

}

let tr = new binarySearchTree();
tr.add(52);
tr.add(45);
tr.add(42);
tr.add(49);
tr.add(49);
tr.add(65);
tr.add(54);
tr.add(55);
tr.add(70);
tr.add(90);
tr.add(89);

console.log(tr.collect());
console.log(tr.contains(1));