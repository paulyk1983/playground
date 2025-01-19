class Stack {
    constructor() {
        this.data = []
    }
    push(element) {
        this.data.push(element)
    }
    pop() {
        if (this.data.length > 0) {
            return this.data.pop()
        } else {
            return null;
        }
    }
    read() {
        if (this.data.length > 0) {
            return this.data[this.data.length -1]
        } else {
            return null;
        }
    }
}

class Reverse {
    constructor() {
        this.stack = new Stack()
    }

    reverseString(str) {
        for (const char of str) {
            this.stack.push(char)
        }
        
        let reversedStr = ''
        while (this.stack.read()) {
            reversedStr += this.stack.read()
            this.stack.pop()
        }
        
        return reversedStr
    }
}

const test = new Reverse()
console.log(test.reverseString('hello'))