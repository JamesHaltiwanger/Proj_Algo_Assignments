//This is the Node Object. This is how they work. I think you need this in here. 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

// 1.) Add Front. Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// 2.) Remove Front. Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// 3.) Front. Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// 4.) Contains. Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new Node(value); // create a new node
        newNode.next = this.head; // attach new node to existing list
        this.head = newNode; // reassign list's head
        return this.head;
    }

    removeFront() {
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    front() {
        if(this.head) {
            return this.head.value;
        }
        return null;
    }

    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

var ssList = new SLL(); //creates new instance of an SSL object
var first = 1;
var second= 2;
ssList.addFront(first); //adds 1 to head node. 
ssList.addFront(second); // moves 1 to second node, and makes head node equal to 2
console.log(ssList.head); //result is "Node {value: 2, next: Node}"
ssList.removeFront(); //removes current head node, leaving 1 as new head node. 
console.log(ssList.front()); //result is "1" because it returns the value, instead of the whole node. 
console.log(ssList.contains(1)); //result is "true"
