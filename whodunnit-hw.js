
// EPISODE 1 //
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//Miss Scarlet will be the murdered as she is the value of the murdered key of scenario which can be accessed globally.



//EPISODE 2//
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//         murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//         return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//the murderer is Professor Plum as the reassignment is within a function so does not change the global variable value // 


//EPISODE 3 //
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//The first verdict is Mrs Peacock as the value assigned to first verdict is the value within the declareMurderer function.
// The second verdict is Professor Plum as they are calling on the murder value outwith a function so will call on the variable of that name with global scope.

//EPISODE 4 //
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Output will be "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard", "Suspect three is Mrs Peacock". This is due to the first variable of suspect 3 being altered within the function and the log is based on the calling of said function. The latter is the unaltered suspect 3 as it does not take into account changes happening inside functions

//EPISODE 5 //

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

//Output will be: The weapon is the Revolver

//both functions have already ran before calling the verdict so the weapon was assigned a new variable of "Revolver"

//EPISODE 6 //
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Output: Mrs White. 
//plotTwist function is declared and run within the changeMurderer function so will always be called whenever changeMurderer is called. This means that Mrs will always be the murderer whenever changeMurderer is called

//EPISODE 7 //
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//         murderer = 'Mr. Green';

//         const plotTwist = function() {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//         }

//         plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
//Output: After my initial guess was wrong, I'm guessing that as they are trying to create a new variable which has already been assigned a value (let murderer = 'Colonel Mustard') that this means the rest of the function cannot run and murderer stays assigned as Mr Green?

//EPISODE 8 //
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

//I'm not 100% how this is the correct answer, I did not guess correctly // 

//EPISODE 9 //
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Output will be 'The murderer is Professor Plum'. murderer is already a variable that has been declared so it cannot be reassigned in the way it has been written. 