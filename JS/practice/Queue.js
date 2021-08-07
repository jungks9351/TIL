// 큐(Queue)는 데이터를 마지막에 밀어넣고 처음데이터 가장 먼저 넣은 데이터를 먼저 꺼내는 선입선출(FIFO - First In First Out) 방식의 자료구조이다.

const Queue = (function () {
    function Queue(array = []) {
        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor: Queue,
        
        enqueue(value) {
            return this.array.push(value);
        },

        dequeue() {
            return this.array.shift();
        },

        entries() {
            return [...this.array];
        }
    };

    return Queue;
}());

const queue = new Queue([1, 2]);
console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());