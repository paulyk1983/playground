const sortedArray = [1,2,3,4,5,6,7,8,20,45,89,99,100]
const targetElementValue = 45

// use binary search to find the index of the element, 45
var lowIndex = 0
var highIndex = sortedArray.length
var middleIndex = 1

var found = false
while (found === false) {
    middleIndex = Math.ceil(lowIndex + (highIndex-lowIndex)/2)
    if (sortedArray[middleIndex] === targetElementValue) {
        found = true
    }

    if (sortedArray[middleIndex] < targetElementValue) {
        lowIndex = middleIndex+1
    } else {
        highIndex = middleIndex-1
    }
}

console.log(middleIndex)
