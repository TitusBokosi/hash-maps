class HashMap {
  constructor() {
    this.capacity = 0;
    this.loadFactor = 0.85;
    this.buckets = new Array(16);
  }

  hash(key) {
    let hashCode = 0;
    let primeNUmber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNUmber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }
    return hashCode;
  }

  insert(key, value) {
    // inserts into a bucket with index corresponding to hashcode
    const hashCode = this.hash(key);

    // handles collision with Seperate chaining( linked lists)
    if (this.buckets[hashCode] === undefined) {
      this.buckets[hashCode] = value;
    } else {
      const newLinkedList = new LinkedList();
      newLinkedList.append(value);
    }
  }

  get(key) {
    const index = hash(key);

    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    } else {
      return this.buckets[index];
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);
    // let current = this.head.next;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
    } else {
      this.appendHelper(this.head, newNode);
      this.tail = newNode;
      this.size += 1;
    }
  }

  prepend(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size += 1;
    }
  }

  length() {
    return this.size;
  }

  lastNode() {
    return this.tail.value;
  }
  firstNode() {
    return this.head.value;
  }

  atIndex(index) {
    let i = 0;
    let currentNode = this.head;

    while (i <= index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.value;
  }

  pop() {
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    this.size--;
    // currentNode = null;
    return currentNode;
  }

  appendHelper(head, newNode) {
    if (head.next === null) {
      head.next = newNode;
    } else {
      return this.appendHelper(head.next, newNode);
    }
  }

  contains(value) {
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    while (currentNode.next) {
      string += " " + currentNode.value;
      currentNode = currentNode.next;
    }
    return string;
  }
}

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

const hashMap = new HashMap();
hashMap.insert("thom", "yado");
console.log(hashMap.buckets[hashMap.hash("thom")]);
