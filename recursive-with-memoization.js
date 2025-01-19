// chapter 12

// Excersize 1
function addUntil100(array) {
    if (array.length === 0) { return 0 }

    if (array[0] + addUntil100(array.slice(1)) > 100) {
        return addUntil100(array.slice(1))
    } else {
        return array[0] + addUntil100(array.slice(1))
    }
}
function addUntil100Ref(array) {
    if (array.length === 0) { return 0 }

    var nextUntil100Ref = addUntil100Ref(array.slice(1))

    if (array[0] + nextUntil100Ref > 100) {
        return nextUntil100Ref
    } else {
        return array[0] + nextUntil100Ref
    }
}

// Excersize 2: add memoization to to improve efficiency
function golomb(n) {
    if (n === 1) { return 1 }

    return 1 + golomb(n - golomb(golomb(n - 1)))
}
// ???
function golombRef(n, memo={}) {
    if (n === 1) { return 1 }

    if (!memo[n]) {
        memo[n] = 1 + golombRef(n - golombRef(golombRef(n - 1, memo), memo), memo)
    } 

    return memo[n]
}

// Excersize 3: add memoization to improve efficiency
function uniquePaths(rows, columns) {
    if (rows === 1 || columns === 1) {
        return 1
    }

    return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1)
}

function uniquePathsRef(rows, cols, memo={}) {
    if (rows === 1 || cols === 1) {
        return 1
    }
    let rowColSum = rows + cols

    if (!memo[rowColSum]) {
        memo[rows+cals] = uniquePathsRef(rows - 1, columns, memo) + uniquePathsRef(columns, rows - 1, memo)
    }

    return memo[rowColSum]
}
// column/row sum: value
let obj = {}
obj[1] = 100
console.log(obj)

// row number
// col number
// sum
