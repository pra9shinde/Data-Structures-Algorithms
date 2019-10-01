//Linked list is a list which is divided and linked
//This division is called as node
//Each node consists of a data and pointer to the next node
//by default next pointer is null, we need to link the nodes according to our needs
// linked list are faster than the normal lists and arrays because insertion and deletion is faster.
// If the data is added between the list instead of shifting the data after insertion or deletion, here just node is created and linked
//Hence linked lists are faster

class ListNode{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

//For Loop for Linked List
function printList(node){
    let current = node;// to store the value present inside the current.next
    while(current!= null){
        console.log(current.data);
        current = current.next;//increment
    }
}

function sumList(node){
    let current = node;
    let sum = 0;
    while(current != null){
        sum += current.data;
        current = current.next;
    }
    console.log(sum);
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);

n1.next = n2;
n2.next = n3;

// console.log(n1);

// printList(n1);

sumList(n1);