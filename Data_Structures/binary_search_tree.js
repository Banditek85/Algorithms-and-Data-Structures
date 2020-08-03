// Class for defining node in a binary search tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Class for defining Binary search tree
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
}


var bst = new BinarySearchTree();
bst.insert(50);

bst.insert(23);
bst.insert(59);
bst.insert(11);

console.table(bst);