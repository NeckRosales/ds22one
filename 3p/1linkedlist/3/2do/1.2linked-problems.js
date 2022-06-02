/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 * 
 * zeeAlso edmodo
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  get size() {
    let contador = 0;
    let node = this.head;
    while (node) {
      contador++;
      node = node.next;
    }
    return contador;
  }
  clear() {
    this.head = null;
  }
  contains(b) {
    let node = this.head;
    while (node != null && node.data != b) node = node.next;
    return node ? true : false;
  }
  getLast() {
    let nodesiguiente = this.head;
    if (nodesiguiente) {
      while (nodesiguiente.next) {
        nodesiguiente = nodesiguiente.next;
      }
    }
    return nodesiguiente;
  }
  getFirst() {
    return this.head;
  }
  prepend(n) {
    n.next = this.head;
    this.head = n;
  }
  append(n) {
    let siguiente = this.getLast();
    if (siguiente) siguiente.next = n;
    else this.head = n;
  }
  traverse(b) {
    let node = this.head;
    for (let i = 1; i < b; i++) {
      node = node.next;
    }
    return node;
  }
}
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(b) {
    this.list.append(new ListNode(b));
  }
  dequeue() {
    let primero = this.list.getFirst();
    if (primero) {
      this.list.head = primero.next;
      return primero.data;
    }
    return null;
  }
  toString() {
    let str = "";
    let node = this.list.getFirst();
    let atras = this.list.getLast();
    while (node) {
      str += `${node.data}${atras == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }
  empty() {
    this.list.clear();
  }
  get front() {
    let primero = this.list.getFirst();
    return primero ? primero.data : null;
  }
  get back() {
    return this.list.getLast();
  }
}
class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(b) {
    this.list.append(new ListNode(b));
  }
  pop() {
    if (this.list.size > 1) {
      let secondToLast = this.list.traverse(this.list.size - 1);
      let siguiente = secondToLast.next;
      secondToLast.next = null;
      return siguiente.data;
    } else if (this.peek()) {
      let data = this.peek();
      this.empty();
      return data;
    } else return null;
  }
  peek() {
    let siguiente = this.list.getLast();
    return siguiente ? siguiente.data : null;
  }
  toString() {
    let str = "";
    let node = this.list.getFirst();
    let atras = this.list.getLast();
    while (node) {
      str += `${node.data}${atras == node ? "." : ", "}`;
      node = node.next;
    }
    return str ? str : null;
  }
  empty() {
    this.list.clear();
  }
}
let queue = new Queue();
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(9);
console.log(queue.toString());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toString());

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.pop());
console.log(stack.toString());
