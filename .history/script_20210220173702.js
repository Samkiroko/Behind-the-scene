'use strict';

function calAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calAge(1991);
