const now = new Date()
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let base = prompt('Enter base', "number")
let height = prompt('Enter height', "number")
console.log(0.5 * base * height)
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let sideA = prompt("Enter Side A", "number")
let sideB = prompt("Enter Side B", "number")
let sideC = prompt("Enter Side C", "number")
console.log(+sideA + +sideB + +sideC)
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter Lenght", "Number")
let width = prompt("Enter Width", "Number")
console.log(`Your perimeter of rectangle is ${2 * (+length + +width)} cm `)
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius", "Number")
console.log(`Your Circle area is ${Math.PI * radius * radius}`)
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = prompt("Enter X", "Number")
let slope1 = (2 * +x) - 2
console.log(`y = ${slope1}`)
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = prompt("Enter the x1", "Number")
let y1 = prompt("Enter the y1", "Number")
let x2 = prompt("Enter the x2", "Number")
let y2 = prompt("Enter the y2", "Number")
let slope2 = (+y2 - +y1)/(+x2 - +x1)
console.log(`m is ${slope2}`)
// Compare the slope of above two questions.
// let Math.tan(angel1) = x / slope1

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x3 = prompt("Enter the x3", "Number")
let y3 = ((x3**2) + (6 * x) + 9)
// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = prompt("Enter hours", "Number")
let rate = prompt("Enter rate per hour", "Number")
console.log(`Your weekly earning is ${+hours * +rate}`)
// If the length of your name is greater than 7 say, your name is long else say your name is short.
let firstName = prompt("Enter your name", "Name")
firstName.length > 7
  ? console.log(`Your name greater than long`)
  : console.log(` Your name greater than short`)
// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
let lastName = prompt("Enter your last name", "Last name")
firstName.length > lastName
  ? console.log(`Your name bigger than your surname`)
  : console.log(`Your name shorter than your surname`)
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = prompt("What is my age", "Number")
let yourAge = prompt("What is your age", "Number")
myAge > yourAge
  ? console.log(`I am ${+myAge - +yourAge} older than you`)
  : console.log(`You are ${+yourAge - +myAge} older than me`)
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let birthYear = prompt("Enter birth year", "Number")
let today = now.getFullYear()
let age = today - birthYear
age >= 18
  ? console.log(`You are ${age}. You are old enough to drive`)
  : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
console.log(`You lived ${ +age * 365 * 24 * 60 * 60}`)
// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let mounth = now.getMonth() + 1
mounth.length = 1
? mounth = `0${mounth}`
: mounth = mounth
console.log(`${now.getDate()}-${mounth}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
console.log(`${now.getFullYear()}-${mounth}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
console.log(`${now.getFullYear()}-${mounth}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
