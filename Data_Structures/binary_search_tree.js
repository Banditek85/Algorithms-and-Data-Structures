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
<<<<<<< HEAD

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
=======
}


var bst = new BinarySearchTree();
bst.insert(50);

bst.insert(23);
bst.insert(59);
bst.insert(11);

console.table(bst);
>>>>>>> 1647a96bea289ad510a96a24d21d15549c2b5b68
