class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //if 'this' is the current node, then I need to compare this.value to this.right's value and this.left's value
    //if 'this.value' is greater than either this.left or this.right, I need to add the node to the right
    //if 'this.value' is less than either this.left or this.right, I need to add the node to the left
    //otherwise, if 'this.#next' value is less than  'this.value', I need to do this.left = node
    if (node.value === this.value) {
      return;
    }

    if (node.value < this.value) {
      if (!this.left) this.left = node;
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

console.log('B: ', B);
