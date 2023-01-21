// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++){
  console.log(i)
}
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}
let a = 0
do {
  console.log(a)
  a++
} while (a <= 10)
// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let d = 10; d >= 0; d = d - 1){
  console.log(d)
}
let b = 10
while (b >= 0) {
  console.log(b)
  b = b - 1
}
let c = 10
do {
  console.log(c)
  c = c - 1
} while (c >= 0)
// Iterate 0 to n using for loop
for(let i = 0; i <= 12; i++){
  if(i == 9){
    break
  }
  console.log(i)
}
// Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
for(let diyezArray = []; diyezArray.length <= 7; diyezArray.push("#") ){
  diyez = diyezArray.join(' ')
  console.log(diyez)
}
// Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let p = 0; p < 11; p++) {
  console.log(`${p} * ${p} =${p * p}  `)

}
// Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for (let i = 0; i < 11; i++) {
  console.log(`${i}  ${i ** 2}  ${i ** 3}`)
}
// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i < 101; i++) {
  if (i % 2 === 1) {
    console.log(i)
  }
}
// Use for loop to iterate from 0 to 100 and print only prime numbers
// console.log("only prime numbers")
// for (let i = 100; i > 1; i--) {
//   let number = []
//   number.push(i)
//   for (let x = i - 1; x > 1; x--) {
//     if (i % x === 0) {
//       console.log(`${i} is not prime number`)
//     }
//   }
//   console.log(`number ${number}`)
// }
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
console.log("sum of all numbers")
let sum = 0
for (let i = 0; i < 101; i++) {
  sum = sum + i
}
console.log(sum)
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumOfEven = 0
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    sumOfEven = sumOfEven + i
  }
}
console.log(sumOfEven)
let sumOfOdd = 0
for (let i = 0; i < 101; i++) {
  if (i % 2 === 1) {
    sumOfOdd = sumOfOdd + i
  }
}
console.log(sumOfOdd)
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//   [2550, 2500]
let arrayOfEvenAndOdd = [sumOfEven, sumOfOdd]
console.log(arrayOfEvenAndOdd)
// Develop a small script which generate array of 5 random numbers
let randomNumberArray = []
for (let i = 1; i < 6; i++) {
  let randomNumber = Math.random() * 101
  let randomNumberFromOneTohundrend = Math.floor(randomNumber)
  randomNumberArray.push(randomNumberFromOneTohundrend)
}
console.log(randomNumberArray)
// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumberArray2 = []
for (let i = 1; i < 50; i++) {
  let randomNumber = Math.random() * 101
  let randomNumberFromOneTohundrend = Math.floor(randomNumber)
  if (!(randomNumberArray2.includes(randomNumberFromOneTohundrend))){
    randomNumberArray2.push(randomNumberFromOneTohundrend)
  }
}
console.log(randomNumberArray2)
// Develop a small script which generate a six characters random id:
// 5j2khz
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(alphabet.length)
let randomNumber = Math.random() * 27;
let randomNumberFromOneToTwenty = Math.floor(randomNumber);
console.log(randomNumberFromOneToTwenty)
console.log(alphabet[randomNumberFromOneToTwenty - 1])


for (let i = 1; i < 7; i++) {
  let randomNumber = Math.random() * 27;
let randomNumberFromOneToTwenty = Math.floor(randomNumber);
  let randomAlphabet = alphabet[randomNumberFromOneToTwenty - 1]
//   let generateRandomId =

}
