/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 * 
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 * 
 */
function inorder(a){
    if (a!==null){
        inorder(a.l)
        console.log(a.d)
        inorder(a.r)
    }
}
function postorder(a){
    if (a!==null){
        postorder(a.l)
        postorder(a.r)
        console.log(a.d)
    }
}
function preorder(m){
    if (m!==null){
        console.log(m.d)
        preorder(m.l)
        preorder(m.r)
    }
}
function Node(n){
    this.d=n//bject<->data
    this.l=null//eft
    this.r=null//ight
}
let ns = new Node('+')
let n1 = new Node('-')
let n2 = new Node(3)
let n3 = new Node(8)
let n4 = new Node(3)
ns.l = n1
n1.l = n3
n1.r = n4
ns.r = n2
console.log('Preorder:')
console.log(preorder(ns))
console.log('Inorder')
console.log(inorder(ns))
console.log('Postorder')
console.log(postorder(ns))
