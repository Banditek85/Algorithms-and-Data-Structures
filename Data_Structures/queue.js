class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.unshift(element);
    }

    dequeue() {
        return this.queue.pop();
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

let my_queue = new Queue();
my_queue.enqueue(1);
my_queue.enqueue(2);
my_queue.enqueue(3);
my_queue.enqueue(4);

console.log(my_queue);

my_queue.dequeue();
console.log(my_queue.isEmpty());
