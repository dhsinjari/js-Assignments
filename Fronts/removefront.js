let SLL1 = {
    head: null
  };
  
  function addFront(sll, value) {
      let newNode = { data: value, next: sll.head };
      sll.head = newNode;
      return sll.head;
  }
  
  function removeFront(sll) {
      if (sll.head === null) {
        return null;
      }
      let oldHead = sll.head;
      sll.head = sll.head.next;
      return oldHead;
  }
  
  addFront(SLL1, 18);
  addFront(SLL1, 5);
  console.log(removeFront(SLL1)); // { data: 5, next: { data: 18, next: null } }
  console.log(removeFront(SLL1)); // { data: 18, next: null }
  