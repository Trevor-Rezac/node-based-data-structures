class LinkedListNode {
  #value = '';
  #next = null;

  constructor(value) {
    this.#value = value;
    this.#next = null;
  }

  //pseudo code of my thoughts "thanks Marty"
  add(node) {
    if (!this.next) {
      this.#next = node;
    } else {
      this.#next.add(node);
    }
  }

  //need to get a list of... nodes?
  getList() {
    //if "this" is the node, then I need to check if "this" has any value.
    //if it does not, I need to return...a string of 0? or, no nodes? idk
    if (!this) return '0';
    //if it does, return a string with the value, and then call getList again???
    return this.toString + this.getList();
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
root.remove(1);
console.log(root.getList()); // 'A C D E'
