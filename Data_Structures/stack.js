class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    // Pushes element to the top of the stack
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns last (one at the top) element of the stack
    pop() {
    this.count = this.count - 1;
    let popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;  
    }

    // Returns last (one at the top) element of the stack
    peek() {
        return "Last element of the stack is: " + this.storage[Number(this.count) - 1];
    }

    size() {
        return "Size of the stack is: " + this.count;
    }
}


let my_stack = new Stack();

my_stack.push('first');
my_stack.push('second');
my_stack.push('third');
console.log(my_stack);


my_stack.pop();
console.log(my_stack);

console.log(my_stack.peek());
console.log(my_stack.size());