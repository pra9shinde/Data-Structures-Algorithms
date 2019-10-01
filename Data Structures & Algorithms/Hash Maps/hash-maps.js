class HashMap{
    constructor(){
        this.buckets = new Array(7);
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

    put(value){
        console.log(value);
        let index = this.hashCode(value);
        this.buckets[index] = value;
    }

    get(key){
        let index = this.hashCode(key);
        return this.buckets[index]; 
    }
}

let h = new HashMap();
h.put("pranav");
