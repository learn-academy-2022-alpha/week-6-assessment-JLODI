// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentenceMaker", () => {
  it("Takes in an array and returns an array with a sentence about each person", () => {
    expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

  // FAIL  ./code-challenges.test.js
  // ✕ Takes in an array and returns an array with a sentence about each person (3 ms)

  // ● Takes in an array and returns an array with a sentence about each person

  //   ReferenceError: sentenceMaker is not defined



// b) Create the function that makes the test pass.

// pseudo code:
// Define function as "sentenceMaker"
// Takes in an array
// Itterates through the array
// assign new array
// Split first name and last name into separate strings
// Itterate through strings
// Splits name from first letter
// Capitalizes first letter of name
// Rejoins first letter with string
// Rejoins First and Last name
// adds First name and Last Name and "is " occupation to new string
// add new string to new array
// return new array

const sentenceMaker = (array) => {
  let mappedArray = array.map(value => {
    cappedName = value.name.split(' ').map((word, i) =>{
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    value = `${cappedName} is ${value.occupation}.`
    return value
  })
  return mappedArray
}

// PASS  ./code-challenges.test.js
// ✓ Takes in an array and returns an array with a sentence about each person (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("onlyRemainders", () => {
  it("Takes in an array and returns an array of only remainders of numbers divided by 3", () => {
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js
// onlyRemainders
//   ✕ Takes in an array and returns an array of only remainders of numbers divided by 3

// ● onlyRemainders › Takes in an array and returns an array of only remainders of numbers divided by 3

//   ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// define function onlyRemainders
// takes in an array
// itterates through the array
// check if value is a number
// if yes, push to new array
// itterate through the new array
// divide by 3 and get remainder 
// return new array

const onlyRemainders = (array) => {
  newArray = array.filter(value => typeof value === 'number')
  newNewArray = newArray.map(num => num % 3)
return newNewArray
}

// PASS  ./code-challenges.test.js
// onlyRemainders
//   ✓ Takes in an array and returns an array of only remainders of numbers divided by 3 (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubeNumSum", (array) => {
  it("Takes in an array and returns sum of all numbers cubed", () => {
    expect(cubeNumSum(cubeAndSum1)).toEqual(99)
    expect(cubeNumSum(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
// cubeNumSum
//   ✕ Takes in an array and returns sum of all numbers cubed (3 ms)

// ● cubeNumSum › Takes in an array and returns sum of all numbers cubed

//   ReferenceError: cubeNumSum is not defined


// b) Create the function that makes the test pass.

// pseudo code:
// define function cubeNumSum
// define empty variable that will store the sum
// takes in an array
// itterates through the array
// calculates number to the third power
// adds value to the sum
// return the sum

const cubeNumSum = (array) => {
  let sum = 0
    array.forEach(value => sum += Math.pow(value, 3)
  )
  return sum
}

// alt way using reduce
// const cubeNumSum = (array) => {
//   let cubedArray = array.forEach(value => Math.pow(value, 3))
//   let sum = cubedArray.reduce(function(a, b){
//     return a + b;}, 0)
//   return sum
// }

// PASS  ./code-challenges.test.js
// cubeNumSum
//   ✓ Takes in an array and returns sum of all numbers cubed (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total