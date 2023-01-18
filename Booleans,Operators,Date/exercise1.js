const now = new Date()
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Hakan"
let lastName = "Ulufer"
let country = "Netherlands"
let city = "Haarlem"
let age = 32
let isMarried = true
let year = Date.now()
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
// Check if type of '10' is equal to 10
console.log("10" == 10)
console.log("10" === 10)
// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10 )
// Boolean value is either true or false.
let trueValue = 1
let falseValue = 0
console.log(trueValue == 1)
console.log(falseValue == 1)
// Write three JavaScript statement which provide truthy value.

// Write three JavaScript statement which provide falsy value.
console.log(null == 0)
console.log(undefined == 0)
console.log(" " == 0)
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3) // 4 > 3 t
console.log(4 >= 3) // 4 >= 3 t
console.log(4 < 3) // 4 < 3 f
console.log(4 <= 3) // 4 <= 3 f
console.log(4 == 4) // 4 == 4 t
console.log(4 === 4) // 4 === 4 t
console.log(4 != 4) // 4 != 4 f
console.log(4 !== 4) // 4 !== 4 f
console.log(4 != '4') // 4 != '4' f
console.log(4 == '4') // 4 == '4' t
console.log(4 === '4') // 4 === '4' f
let python = "python".length
let jargon = "jargon".length
console.log(python === `${jargon}`)// Find the length of python and jargon and make a falsy comparison statement.
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("and, or")
console.log(4 > 3 && 10 < 12)// 4 > 3 && 10 < 12 t
console.log(4 > 3 && 10 > 12)// 4 > 3 && 10 > 12 f
console.log(4 > 3 || 10 < 12)// 4 > 3 || 10 < 12 t
console.log(4 > 3 || 10 > 12)// 4 > 3 || 10 > 12 t
console.log(!(4 > 3))// !(4 > 3) f
console.log(!(4 < 3))// !(4 < 3) t
console.log(!(false))// !(false) t
console.log(!(4 > 3 && 10 < 12))// !(4 > 3 && 10 < 12) f
console.log(!(4 > 3 && 10 > 12))// !(4 > 3 && 10 > 12) t
console.log(!(4 === '4'))// !(4 === '4') t
console.log(!("dragon".includes("on") == "python".includes("on")))// There is no 'on' in both dragon and python
// Use the Date object to do the following activities
console.log(now.getFullYear())// What is the year today?
console.log(now.getMonth()+1)// What is the month today as a number?
console.log(now.getDate())// What is the date today?
console.log(now.getDay())// What is the day today as a number?
console.log(now.getHours())// What is the hours now?
console.log(now.getMinutes())// What is the minutes now?
console.log(now.getSeconds())// Find out the numbers of seconds elapsed from January 1, 1970 to now.
