const findCokeInString = (word, string) => {
 
    let wordIndex = 0
    let stringIndex = 0 
    /*
        iterate through targetString
    */
    while (wordIndex < word.length && stringIndex < string.length) {
        if (word[wordIndex] == string[stringIndex]) {
            wordIndex++
        }

        stringIndex++
    }

    return wordIndex == word.length
}

console.log(findCokeInString('coke', 'adklcdbdkodslcwqkxse'))