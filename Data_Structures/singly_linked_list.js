/* Linked list - No indexes, skyscrapper without elevator, only stairs :) No random access to its nodes, 
connected via nodes with a next pointer. Fast insertion and deletion, because unlike arrays, nothing needs
to be re-indexed after. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linked_List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add node to the end of the linked list
  push(val) {
    var node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      // Update current tail next property
      this.tail.next = node;
      // Set new tail
      this.tail = node;
    }

    this.length++;
    return this;
  }

  // Remove node from the end of the linked list
  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var new_tail = current;

    while (current.next) {
      new_tail = current;
      current = current.next;
    }
    this.tail = new_tail;
    this.tail.next = null;

    this.length--;
    return current;
  }

  // Remove node from the beggining of the linked list
  shift() {
    if (!this.head) return undefined;

    var previous_head = this.head;
    this.head = previous_head.next;

    this.length--;

    return previous_head;
  }

  // Add node to the beggining of the list
  unshift(val) {
    var new_node = new Node(val);

    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    }

    new_node.next = this.head;
    this.head = new_node;

    this.length++;
    return this;
  }

  // Returns node at index passed as parameter
  get(index) {
    let counter = 0;

    if (index < 0 || index > this.length - 1) return undefined;
    
    // start at the head, loop while counter does not equeal index
    var current_node = this.head;
    while (counter != index) {
      current_node = current_node.next;
      counter ++;
    }
    return current_node; 
  }

  // Updates node at index passed in with a value passed in.
  set(val, index) {
    if (!this.get(index)) return false;

    var current_node = this.get(index);
    current_node.val = new Node(val);

    return current_node;
  }

  // insert a new node at specified index
  insert(val, index) {
  }
}

var my_list = new Linked_List();

my_list.push("my node");
my_list.push("second node");
my_list.push("third node");
console.log(my_list);

my_list.pop();

console.log(my_list);