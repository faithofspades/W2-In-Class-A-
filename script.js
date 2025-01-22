/*
Goals for the day:
    1. Review and make objects with nested properties
    2. Become familiar with Data Types in javascript
    3. Use String Literals to easily format text strings
 */

const owl = {
name: 'Stella',
age: 12,
address: {
    street: '123 Main St',
    city: 'Anytown',
    zip: 12345,
},
hobbies: {
    favorite: 'napping',
    leastFavorite: 'flying',
},
};

const age = 24;
const pi = 3.14;
const greeting = 'Hello, World!';
const isEven = (5 % 2 === 0);
const greeting2 = `Hello, World!`; //string backticks
const greeting3 = "Hello, World!"; //string quotes
const greeting4 = 'Hello, World!'; //string single quotes
const name = 'Stella';
const message = `welcome, ${name}!`; //string literal
const multiline = `This is line one. 

This is line two.`;

const a = 5, b = 3;
const result = `the sum of ${a} and ${b} is ${a + b}.`;

console.log(owl);