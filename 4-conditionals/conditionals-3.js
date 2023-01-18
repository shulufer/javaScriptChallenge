// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.
//   Enter a month: JANUARY
//   January has 31 day
//   Enter a month: February
//   February has 28 days.
//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.
let year = prompt("Enter a year")
let yearIsDivisibleByFour = (year % 4)
let monthUpCase = prompt("Enter a month")
let month = monthUpCase.toLowerCase()
switch (month) {
  case "january":
    console.log(`${month} has 31 days.`)
    break;
  case "febuary":
    if (yearIsDivisibleByFour == 0) {
      console.log(`${month} has 29 days.`)
    } else {
      console.log(`${month} has 28 days.`)
    }
      break;
  case "march":
    console.log(`${month} has 31 days.`)
    break;
  case "april":
    console.log(`${month} has 30 days.`)
    break;
  case "may":
    console.log(`${month} has 31 days.`)
    break;
  case "june":
    console.log(`${month} has 30 days.`)
    break;
  case "july":
    console.log(`${month} has 31 days.`)
    break;
  case "august":
    console.log(`${month} has 31 days.`)
    break;
  case "september":
    console.log(`${month} has 30 days.`)
    break;
  case "october":
    console.log(`${month} has 31 days.`)
    break;
  case "november":
    console.log(`${month} has 30 days.`)
    break;
  case "december":
    console.log(`${month} has 31 days.`)
    break;
  default:
    console.log("This is not a month")
    break;
}
