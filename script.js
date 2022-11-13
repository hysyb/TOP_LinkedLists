let input = document.getElementById('text-input');
let button = document.getElementById('submit-btn');
button.addEventListener('click', event => addValue(input.value));

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(value){
        this.head = new Node(value, this.head);
        this.size++;
    }
    returnTail(){
        let current = this.head;
        while (current.nextNode != null){
            current = current.nextNode;
        }
        console.log(current); 
    }

    returnList(){
        let current = this.head;
        while (current.nextNode != null){
            console.log(current);
            current = current.nextNode;
        }
        console.log(current);
    }
}
class Node {
    constructor(value, nextNode=null){
        this.value = value;
        this.nextNode = nextNode;
    }

}

let List = new LinkedList;
function addValue(value){
    List.append(value);
    console.log(List.head);
}
