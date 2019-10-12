const util = require('util');
class HashTable{
    constructor(size = 4){
        this.keyMap = new Array(size);
    }

    set(key,value){
        //Push the value in the array using chaining method
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }   
        this.keyMap[index].push([key,value]);
    }

    get(key){
        let index = this._hash(key);
        for(let i = 0; i < this.keyMap[index].length; i++){
            //console.log(this.keyMap[index][i][0]);
            if(this.keyMap[index][i][0] === key) return [index,i];
        }
        return undefined;
    }


    //Function gives value by calculation, which is then used as a index for pushing th value into keyMap array
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
}

// let arr1 = [];
// let arr2 = [1,2];
// arr1.push(arr2);
// arr1[0].push(3);
// console.log(arr1);

let h1 = new HashTable();
h1.set("hello world","goodbye!!");
h1.set("dogs","are cool");
h1.set("cats","are fine");
h1.set("i love","pizza");

console.log(util.inspect(h1, false, null, true));
console.log(h1.get("cats"));