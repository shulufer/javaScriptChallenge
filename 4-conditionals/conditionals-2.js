// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scores = prompt("Enter a score")
if (scores >= 80 && scores <= 100) {
  console.log("Your score is A")
} else if (scores >= 70 && scores <= 89) {
  console.log("Your score is B")
} else if (scores >= 60 && scores <= 69) {
  console.log("Your score is C")
} else if (scores >= 50 && scores <= 59) {
  console.log("Your score is D")
} else if (scores >= 0 && scores <= 49)  {
  console.log("Your score is F")
} else {
  console.log("It is not a score")
}
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let seasonUserInput = prompt("Enter a mounth")
let season = seasonUserInput.toLocaleLowerCase()
switch (season) {
  case "september":
    console.log("Autumn");
    break;
    case "october":
    console.log("Autumn");
    break;
    case "november":
    console.log("Autumn");
    break;
    case "december":
    console.log("Winter");
    break;
    case "january":
    console.log("Winter");
    break;
    case "february":
    console.log("Winter");
    break;
    case "march":
    console.log("Spring");
    break;
    case "may":
    console.log("Spring");
    break;
    case "april":
    console.log("Spring");
    break;
    case "june":
    console.log("Summer");
    break;
    break;
    case "july":
    console.log("Summer");
    break;
    break;
    case "august":
    console.log("Summer");
    break;
  default:
    console.log("This is not a mounth");
    break;
}
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
let dayToday = prompt("What is the day today?")
let day = dayToday.toLowerCase()
if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
  console.log(`${day} is a working day`)
} else if (day == "saturday" || day == "sunday" ) {
  console.log(`${day} is a weekend`)
} else {
  console.log("This is not a week day")
}
