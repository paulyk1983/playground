inputArray = [1,2,3,[
        [2,1],2,3,4
    ],4,5
]

const printNumbs = (inputArray) => {
    for (const element of inputArray) {
        if (typeof(element) == "number") {
            console.log(element)
        } else {
            printNumbs(element)
        }
    }
}

printNumbs(inputArray)