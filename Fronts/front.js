let SLL1 = {
    head: null
  };
  
  function addFront(sll, value) {
      let newNode = { data: value, next: sll.head };
      sll.head = newNode;
      return sll.head;
  }
  
  function front(sll) {
      if (sll.head === null) {
        return null;
      }
      return sll.head.data;
  }
  
  function removeFront(sll) {
      if (sll.head === null) {
        return null;
      }
      sll.head = sll.head.next;
  }
  
  addFront(SLL1, 18);
  console.log(front(SLL1)); // 18
  removeFront(SLL1);
  console.log(front(SLL1)); //null
  