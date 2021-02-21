'use strict';

// function calAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3)); accessible if strict mode is disabled
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calAge(1991);\\

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'sam';
// let job = 'developer';
// const year = 1991;

// //functions

// console.log(addDecl(2, 4));
// console.log(addArrow(2, 4));
// console.log(addExpr(2, 4));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => {
//   a + b;
// };

console.log(this);

const calcAge = function (birthYear) {
  console.log(2027 - birthYear);
};
