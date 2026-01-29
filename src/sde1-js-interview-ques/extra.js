//1 remove duplicates
const arr = [1, 2, 2, 7, 8, 8, 9, 7] // can be done using sets as well

const output = []

for (let v of arr) {
    if (output.includes(v)) continue
    else output.push(v)
}
console.log(output)


//2 function that takes an array and return a new array with even values

function getEven(arr) {
    const result = arr.filter((v) => v % 2 === 0)
    return result
}
getEven(arr)

//3 find the longest word in a sentence
const sentence = "hello I am the longesttttt word"

function getLongestWord(sentence) {
    const words = sentence.split(" ")

    let longest = words[0]
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) longest = words[i]
    }
    return longest
}
const longestWord = getLongestWord(sentence)
console.log(longestWord)

//4 get vowels count in order

function getVowels(sentence) {
    const result = { a: 0, e: 0, i: 0, o: 0, u: 0 }
    const alphabets = sentence.split("").filter(Boolean)

    for (let char of alphabets) {
        if (Object.keys(result).includes(char)) result[char]++
    }
    return JSON.stringify(result)

}
const vowels = getVowels(sentence)
console.log(vowels)

//4. get max number in an array

function getMax(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}

const maximum = getMax(arr)
console.log(maximum)






