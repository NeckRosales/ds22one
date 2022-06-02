/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */
class Node {
  constructor(d) {
    this.d = d;
    this.children = [];
  }
  toString() {
    let v = `${this.d} => `;
    this.children.forEach((child) => {
      v += child.d + " ";
    });
    return v;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  add(d, toNodeData) {
    const n = new Node(d);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    if (parent) {
      parent.children.push(n);
    } else {
      if (!this.root) {
        this.root = n;
      } else {
        return "error";
      }
    }
  }
  findBFS(d) {
    let r = null;
    this.traverseBFS((n) => {
      if (n.d == d) {
        r = n;
      }
    });
    return r;
  }
  traverseBFS(c) {
    const queue = [this.root];
    if (c) {
      while (queue.length) {
        const node = queue.shift();
        c(node);
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
  }
}
let t = new Tree();
t.add("A"); 
t.add("B", "A"); 
t.add("C", "A");
t.add("D", "B");
t.add("E", "B");
t.traverseBFS((node) => console.log(node.toString())); 
