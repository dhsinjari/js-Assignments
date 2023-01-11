class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    addFront(value) {
      let newNode = new Node(value, this.head);
      this.head = newNode;
      return this.head;
    }
  }
  
  let SLL1 = new SLL();
  console.log(SLL1.addFront(18));  // Node { data: 18, next: null }
  console.log(SLL1.addFront(5));  // Node { data: 5, next: Node { data: 18, next: null } }
  console.log(SLL1.addFront(73));  // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }




  