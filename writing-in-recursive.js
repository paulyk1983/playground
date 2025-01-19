// chapter 11: Writing in Recursive

// Exercise 1: write a recursive function that acfepts an array of strings 
// and returns the sum of all characters.
function totalChars(array) {
    // base cases
        // array has a single string
    if (array.length == 0) {
        return 0
    }

    // return sum
    return totalChars(array.slice(1)) + array[0].length
}

// Exercise 2: write a recursive function that accepts an array of numbers
// and returns an array containing just the even numbers
function filterOdds(array) {

    // base case
        // array has one or less element
    if (array.length === 0) {
        return []
    }
    // if even, add to new array by calling flterOdds with new element added to newArray
    if (array[0] % 2 === 0) {
        return [array[0]].concat(filterOdds(array.slice(1)))
    } else {
        return filterOdds(array.slice(1))
    }
}

// Exercise 3: write a functin that accepts a number for N 
// and returns the correct number from the *triangular numbers* series.
// * triangular numbers calculation for next number in the series. i + previousNumber
// example: 1,2,6,10,15,21,28

// Exercise 4: Use recursion to write a functino thqt accepts  string 
//and returns the first index that contains the character 'x'.
// assume the string has at least one x

// Exercise 5: Unique Paths Problem - consider a grid with a number of rows and columns,
// write a (recursive?) function that accepts a number of rows and a number of columns
// and calculates the number of possible 'shortest' paths from upper-left of grid to bottom right