/** INSTRUCTIONS
 * 
 * implement a method, function, non-function solution
 * 
 * PROBLEM 
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14  
 *
 * write it and make sure it runs
 */
let arbol = [
  [0, 1, 0, 0], //1
  [1, 0, 1, 1], //2
  [0, 1, 0, 0], //3
  [0, 1, 0, 0], //4
];
class Matriz {
  constructor(mat) {
    this.mat = mat;
  }
  isSquare(mat) {
    for (let i = 0; i < mat.length; i++) {
      let evaluar;
      evaluar = mat[i].length;
      if (evaluar != mat.length) {
        return false;
      }
    }
    return true;
  }
  isSymmetrical(mat) {
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] != mat[j][i]) {
          return false;
        }
      }
    }
    return true;
  }
  isTree(mat) {
    let sumarr = 0;
    let contt = 0;
    let coll = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        contt++;
        coll = contt / mat.length;
      }
    }
    for (let i = 1; i < mat.length; i++) {
      sumarr = 0;
      for (let j = 0; j < col; j++) {
        if (j < i) {
          sumarr += mat[i][j];
          if (sumarr > 1) {
            return false;
          }
        }
      }
    }
    return true;
  }
  isGraph(mat) {
    if (mat.isTree(mat) == false) {
      return true;
    } else {
      return false;
    }
  }
}
let mat = new Matriz(arbol);
console.log(mat.isSquare(mat));
console.log(mat.isSymmetrical(mat));
console.log(mat.isTree(mat));
console.log(mat.isGraph(mat));
