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


//start : null
//end : 1 -> 2 -> 3
function challenge1(){

    let n1 = new ListNode(1);
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);

    n1.next = n2;
    n2.next = n3;

    printList(n1);
}

//start : 1 -> 2 -> 3
//end : 0 -> 1 -> 2 -> 3
function challenge2(){
    n0 = new ListNode(0);
    n0.next = n1;
    console.log("*******");
    printList(n0);
}

//start : 1 -> 3 -> 4
//end : 1 -> 2 -> 3 -> 4
function challenge3(){
    let l1 = new ListNode(1);
    let l2 = new ListNode(3);
    let l3 = new ListNode(4);
    let l4 = new ListNode(2);

    l1.next = l2;
    l2.next = l3;
    console.log("*******");
    l1.next = l4;
    l4.next = l2;
    printList(l1);

}


//start : 1 -> 2 -> 3
//end : 1 -> 2 -> 3 -> 4
function challenge4(){
    let n1 = new ListNode(1);
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);
    let n4 = new ListNode(4);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    printList(n1);
}

//start : 1 -> 99 -> 2 -> 3
//end : 1 -> 2 -> 3
function challenge5(){
    let n1 = new ListNode(1);
    let n99 = new ListNode(99);
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);

    n1.next = n99;
    n99.next = n2;
    n2.next = n3;
    printList(n1);

    n1.next = n2;
    console.log("****");
    printList(n1);
}
challenge5();