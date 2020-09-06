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
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = new Node;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === value) { return true; }
        else {
            var current = this.root;
            while (true) {
                if (value > current.value) {
                    if (current.right === null) return false;
                    else if (current.right === value) return true;
                    else current = current.right;
                } else if (value < current.value) {
                    if (current.left === null) return false;
                    else if (current.right === value) return true;
                    else current = current.left;
                }
            }
        }
    }
}



var t = new BinarySearchTree();
t.insert(23);
t.insert(11);
t.insert(245);

console.log(t);
