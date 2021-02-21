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
  console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthYear => {
  console.log(2027 - birthYear);
  console.log(this);
};

calcAgeArrow(1989);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
