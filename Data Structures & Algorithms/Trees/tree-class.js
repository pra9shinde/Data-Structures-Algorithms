class treeNode{
    constructor(data,right = null,left = null){
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class tree{
    constructor(){
        this.root = null;
    }

    get(){
        this.result = [];
        return this.collect(this.root)
    }

    //Travels through all the nodes of the tree and return in the form of the array using recursion
    collect(currentNode){
        //If the current node is null the return the result
        if(currentNode === null){
            return this.result;
        }
        //Node is not empty so push the data into the array
        this.result.push(currentNode.data);
        //Traverse Left side of the Node Recursive till we reach end 
        this.collect(currentNode.left);
        //Traverse Left side of the Node Recursive till we reach end 
        this.collect(currentNode.right);
        //Return the result after each Left and Right Traversal Ends
        return this.result;
    }

    //Returns Sum of all the nodes and leaves of the trees
    sum(){
        this.sumResult = 0;
        return this._sum(this.root);
    }

    //This is a private method which cannot be called outside of this class like encapsulation
    _sum(currentNode){
        if(currentNode === null){
            return this.sumResult;
        }
        this.sumResult += currentNode.data;
        this._sum(currentNode.left);
        this._sum(currentNode.right);
        return this.sumResult;
    }

    contains(searchValue){
        return this._contains(this.root,searchValue);
    }

    _contains(currentNode,searchValue){
        if(currentNode === null){
            return false;
        }
        else if(currentNode.data === searchValue){
            console.log(currentNode.data,searchValue);
            return true;
        }
        
        return this._contains(currentNode.left,searchValue) ||
        this._contains(currentNode.right,searchValue);
        
    }

    size(){
        return this._size(this.root);
    }

    _size(currentNode){
        if(currentNode === null){
            return 0;
        }
        return 1 + this._size(currentNode.left) + this.size(currentNode.right);
    }

    leaves(){
        return this._leaves(this.root);
    }

    _leaves(currentNode){
        if(currentNode === null){
            return 0;
        }
        if(currentNode.right === null && currentNode.left === null){
            return 1;
        }
        //It will go through Extreme right and Left and Add
        return this._leaves(currentNode.left) + this._leaves(currentNode.right);
    }

    min(){
        return this._min(this.root);
    }

    _min(currentNode){
        if(currentNode === null){
            return 0;
        }
        //In order to find the minimum we will travel left and right of each node
        //COmpare Node's value with its left node and right node and select the minimum
        let leftMin = this._min(currentNode.left);
        let rightMin = this._min(currentNode.right);
        //Following shortcut method can also be used
        //return Math.min(currentNode.data,leftMin,rightMin);

        //Detailed method
        if(currentNode.data < leftMin && currentNode.data < rightMin){
            return currentNode.data;
        }
        else if(leftMin < RightMin){
            return leftMin;
        }
        else{
            return rightMin;
        }
    }

    height(){
        return this._height(this.root);
    }

    _height(currentNode){
        if(currentNode === null){
            return 0;
        }
        let leftHeight = this._height(currentNode.left);
        let rightHeight = this._height(currentNode.right);
        //Here we are travelling left and right of each node and check if it has a child's 
        //If it has a child's It will check which child has max sub-child's and return that
        //Recurssively perform this task 
        if(leftHeight > rightHeight){
            return 1 + leftHeight;
        }
        else{
            return 1 + rightHeight;
        }
    }
}

//Create Single Nodes
let n1 = new treeNode(11);
let n2 = new treeNode(2);
let n3 = new treeNode(3);
let n4 = new treeNode(4);
let n5 = new treeNode(5);

//Create Tree and Link Above Nodes
let tr = new tree();
tr.root = n1;
n1.left = n2;
n1.right = n3;
n3.right = n4;
n4.left = n5;

// console.log(tr.get());
// console.log(tr.sum());
// console.log(tr.contains(5));
// console.log("size",tr.size());
//console.log(tr.leaves());
//console.log(tr.min());
console.log(tr.height());