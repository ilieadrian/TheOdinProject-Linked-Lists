class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.length = 0;
  }

  //append(value) adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }

  //prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
    this.length++;
  }

  //size returns the total number of nodes in the list
  size() {
    return this.length;
  }

  //head returns the first node in the list
  head() {
    return this.headNode;
  }

  //tail returns the last node in the list
  tail() {
    let current = this.headNode;
    while (current && current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  //at(index) returns the node at the given index
  at(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  //pop removes the last element from the list
  pop() {
    if (!this.headNode) return null;
    if (!this.headNode.nextNode) {
      const poppedNode = this.headNode;
      this.headNode = null;
      this.length--;
      return poppedNode;
    }
    let current = this.headNode;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const poppedNode = current.nextNode;
    current.nextNode = null;
    this.length--;
    return poppedNode;
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  //toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.headNode;
    let result = "";
    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }
  //insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.length++;
  }

  //removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      this.length--;
      return;
    }
    let current = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    current.nextNode = current.nextNode.nextNode;
    this.length--;
  }
}

export { LinkedList };