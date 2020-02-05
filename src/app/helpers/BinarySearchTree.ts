class BstNode {
  value: number;
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

export default class BinarySearchTree {
  root: BstNode;

  constructor() {
    this.root = null;
  }

  insert = (val: number) => {
    const newNode = new BstNode(val);
    let current;
    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    current = this.root;
    while (true) {
      if (current.value === val) {
        break;
      }

      if (current.value < val) {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }

      if (current.value > val) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      }
    }

    return this;
  }

  traverseInOrder = (direction) => {
    const numbers = [];
    const traverse = (node, side) => {
      if (side === 'MIN') {
        if (node.left) {
          traverse(node.left, direction);
        }
        numbers.push(node.value);
        if (node.right) {
          traverse(node.right, direction);
        }
      }
      if (side === 'MAX') {
        if (node.right) {
          traverse(node.right, direction);
        }
        numbers.push(node.value);
        if (node.left) {
          traverse(node.left, direction);
        }
      }
    };
    traverse(this.root, direction);

    return numbers;
  }
}
