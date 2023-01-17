// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = "10"
console.log(ten === 10)
let numten = +ten
console.log(numten === 10)
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let gravity = '9.8'
console.log(parseFloat(gravity) == 10)
let gravityCeil = Math.ceil(gravity)
console.log(gravityCeil == 10)
// Check if 'on' is found in both python and jargon
console.log("jargon".includes("on"))
console.log("python".includes("on"))
// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon.".includes("jargon"))
// Generate a random number between 0 and 100 inclusively.
let randomNumberZeroToOne = Math.random()
let randomNumberZeroToHunderad = Math.floor(randomNumberZeroToOne * 101)
console.log(randomNumberZeroToHunderad)
// Generate a random number between 50 and 100 inclusively.
let randomNumberFiftyToHunderad = Math.floor((randomNumberZeroToOne * 51) + 50)
console.log(randomNumberFiftyToHunderad)
// Generate a random number between 0 and 255 inclusively.
let randomNumberZeroToTwoHunderadFiftyFife = Math.floor(randomNumberZeroToOne * 256)
console.log(randomNumberZeroToTwoHunderadFiftyFife)
// Access the 'JavaScript' string characters using a random number.
let javascript = "JavaScript"
let randomNumberZeroToTen = Math.floor(randomNumberZeroToOne * 10)
console.log(randomNumberZeroToTen)
console.log(javascript[randomNumberZeroToTen])
// Use console.log() and escape characters to print the following pattern.
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t1\t64\n5\t1\t5\t25\t125")
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf("because"))
console.log(because.lastIndexOf("because"))
console.log(because.substr(31,54-31))
