//TO avoid collisions in hashmaps, we store key as well as value in the array in the form of object
//Check whther the array index is empty(calculated index because of collision same index can appear)
//If the index is not empty then +3 or Delta the index and check if it's empty , do this until the free index is found and then insert


class HashMap{
    constructor(){
        this.buckets = new Array(7);
        this.maxProbes = 3;
        this.delta = 3;
    }

    hash(str){
        str = str.toString().toLowerCase();

        const ALPHABET = "qwerhgkjasdkjhgsdfkjhllqwue";
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum += ALPHABET.indexOf(str.charAt(i));
        }
        return sum
    }

    hashCode(key){
        let hash = this.hash(key) % this.buckets.length;
        return hash;
    }

    put(key,value){
        let index = this.hashCode(key);

        //nothing was there hence insert
        if(this.buckets[index] === null){
            console.log(index);
            this.buckets[index] = {key,value};
        }

        
        let attempt = 0;
        let isPlaced = false;
        //Try 3 attempts to find the empty place, index is incremented by delta
        while(attempt < this.maxProbes && !isPlaced){
            index = (index + this.delta) % this.buckets.length
            if(this.buckets[index] === null){
                console.log(index);
                this.buckets[index] = {key,value};
                isPlaced = true;
                return isPlaced;
            }
            attempt++;
        }
    }

    get(key){
        let index = this.hashCode(key);

        let attempts = 0
        while(attempts < this.maxProbes){
            if(this.buckets[index].key === key){
                console.log(index);
                return this.buckets[index].value;
            }
            index += this.delta;
            attempt++;
        }
    }


    remove(key){
        let index = this.hashCode(key);

        let attempts = 0
        while(attempts < this.maxProbes){
            if(this.buckets[index].key === key){
                return this.buckets[index] = null;
            }
            index += this.delta;
            attempt++;
        }
    }
}

let h = new HashMap();
h.put("pranav",7.1);
