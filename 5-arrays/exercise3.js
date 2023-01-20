import { countries2 } from "./countries.js";

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(ages)
let agesSort = ages.sort()
console.log(agesSort)
console.log(`Min age : ${agesSort[0]}`)
console.log(`Max age : ${agesSort[agesSort.length - 1]}`)
// Find the median age(one middle item or two middle items divided by two)
if(agesSort.length % 2 == 0) {
  console.log( `1-${agesSort[(agesSort.length / 2)]} 2-${agesSort[(agesSort.length / 2) +1 ] }`)
} else {
  console.log( `i the middle ${ agesSort[Math.ceil(agesSort.length / 2)] }`)
}
// Find the average age(all items divided by number of items)
let avarageAge = ((ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length)
console.log(avarageAge)
// Find the range of the ages(max minus min)
let rangeOfAges = ((agesSort[agesSort.length - 1]) - (agesSort[0]));
console.log(rangeOfAges)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
console.log(countries2[Math.ceil(countries2.length / 2)])
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries2.length)
console.log(Math.ceil(countries2.length / 2))
let countriesArray1 = countries2.slice(0, Math.ceil(countries2.length / 2))
console.log(countriesArray1)
let countriesArray2 = countries2.slice(Math.ceil(countries2.length / 2), countries2.length)
console.log(countriesArray2)
