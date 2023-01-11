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
  
    display() {
      let runner = this.head;
      let values = [];
      while (runner !== null) {
        values.push(runner.data);
        runner = runner.next;
      }
      return values.join(", ");
    }
  }
  
  let SLL1 = new SLL();
  SLL1.addFront(76);
  SLL1.addFront(2);
  console.log(SLL1.display()); // "2, 76"
  SLL1.addFront(11.41);
  console.log(SLL1.display()); // "11.41, 2, 76"
  