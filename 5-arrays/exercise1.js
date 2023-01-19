// Declare an empty array;
const ar = []
// Declare an array with more than 5 number of elements
const arr = Array(5)
// Find the length of your array
console.log(arr.length)
// Get the first item, the middle item and the last item of the array
console.log(arr[0])
console.log(arr[arr.length + 1])
console.log(arr[Math.ceil(arr.length / 2)])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arra = [1, "hakan", [3, 4], null, true, "ulufer"]
console.log(arra.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, and Amazon"
let array = string.split(', ')
// Print the array using console.log()
console.log(array)
// Print the number of companies in the array
console.log(array.length)
// Print the first company, middle and last company
console.log(array[0])
console.log(array[arr.length + 1])
console.log(array[Math.ceil(arr.length / 2)])
// Print out each company
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
// Change each company name to uppercase one by one and print them out
let uppercaseArray = []
uppercaseArray[0] = array[0].toUpperCase()
uppercaseArray[1] = array[1].toUpperCase()
uppercaseArray[2] = array[2].toUpperCase()
uppercaseArray[3] = array[3].toUpperCase()
uppercaseArray[4] = array[4].toUpperCase()
uppercaseArray[5] = array[5].toUpperCase()
uppercaseArray[6] = array[6].toUpperCase()
console.log(uppercaseArray)
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${array.toString()} are big IT companies`)
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let itCompanies = prompt("Enter an IT componie")
let itCompaniesUpperCase = (itCompanies.toUpperCase())
if (uppercaseArray.includes(itCompaniesUpperCase) ) {
  console.log("it exist")
} else {
  console.log("the company is not found")
}
// Filter out companies which have more than one 'o' without the filter method
let pattern = /O/gi
if (uppercaseArray[0].match(pattern) == null) {

} else if (uppercaseArray[0].match(pattern).length > 1) {
  console.log(`${uppercaseArray[0]} has \"o\" more than one`)
}
if  (uppercaseArray[1].match(pattern) == null) {

} else if (uppercaseArray[1].match(pattern).length > 1) {
  console.log(`${uppercaseArray[1]} has \"o\" more than one`)
}
if (uppercaseArray[2].match(pattern) == null) {

} else if (uppercaseArray[2].match(pattern).length > 1) {
  console.log(`${uppercaseArray[2]} has \"o\" more than one`)
}
if (uppercaseArray[3].match(pattern) == null) {

} else if (uppercaseArray[3].match(pattern).length > 1) {
  console.log(`${uppercaseArray[3]} has \"o\" more than one`)
}
if (uppercaseArray[4].match(pattern) == null) {

} else if (uppercaseArray[4].match(pattern).length > 1) {
  console.log(`${uppercaseArray[4]} has \"o\" more than one`)
}
if (uppercaseArray[5].match(pattern) == null) {

} else if (uppercaseArray[5].match(pattern).length > 1) {
  console.log(`${uppercaseArray[5]} has \"o\" more than one`)
}
if (uppercaseArray[6].match(pattern) == null) {

} else if (uppercaseArray[6].match(pattern).length > 1) {
  console.log(`${uppercaseArray[6]} has \"o\" more than one`)
}
// Sort the array using sort() method
console.log(array.sort())
// Reverse the array using reverse() method
console.log(array.reverse())
// Slice out the first 3 companies from the array
console.log(array.slice(0, 3))
console.log(array)
// Slice out the last 3 companies from the array
console.log(typeof(array.length - 3))
console.log(array.slice((array.length - 3), (array.length - 1)))
// Slice out the middle IT company or companies from the array
array.slice([Math.ceil(arr.length / 2)], 1)
console.log(array.slice(Math.ceil(arr.length / 2) ,Math.ceil(arr.length / 2) +1 ))
// Remove the first IT company from the array
console.log("remove")
console.log(array)
array.shift()
console.log(array)
// Remove the middle IT company or companies from the array
console.log("remove middle")
console.log(array)
array.splice(Math.ceil(array.length / 2),1)
console.log(array)
// Remove the last IT company from the array
console.log("remove")
console.log(array)
array.pop()
console.log(array)
// Remove all IT companies
console.log(array)
array.splice(0, array.length)
console.log(array)
