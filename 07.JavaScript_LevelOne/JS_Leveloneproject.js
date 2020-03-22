var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");
var height = prompt("What is your height in CM?");
var petName = prompt("What is your pet's name?");
alert("Thank you very much for the information!");

var firstNameFirstLetter = firstName[0];
var lastNameFirstLetter = lastName[0];

// Initial attemt - would have required multiple else statements
//
// if (firstNameFirstLetter==lastNameFirstLetter) {
//   if (age < 30 && age >20) {
//     if (height>=170) {
//       if (petName.slice(-1)=="y") {
//         console.log("You're a spy harry!");
//       }
//     }
//   }
// }

//Succesfull atempt
if (
firstNameFirstLetter==lastNameFirstLetter &&
age < 30 && age >20 &&
height>=170 &&
petName.slice(-1)=="y"
   ) {
  console.log("You're a Spy Harry!");
}
else {
  console.log("Nothing to see here");
}
