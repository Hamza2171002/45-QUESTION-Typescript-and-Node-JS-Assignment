/*You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//test for equality and inequality with string.

const str1 :string = "Hello";
const str2 :string = "hello";
console.log(str1 === str2);  //false
console.log(str1 !== str2);  //true

//test using the lowercase function.

const text1 :string = "Hello, World!";
const text2 :string = "hello, world!";
console.log(text1===text2);  //false
console.log(text1.toLowerCase() === text1);  //true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1 :number = 12;
const num2 :number = 6;

console.log(num1 === num1);  //false
console.log(num1 !== num1);  //true
console.log(num1 < num1);  //false
console.log(num1 > num1);  //true
console.log(num1 <= num1);  //false
console.log(num1 >= num1);  //true

//test using "and" and "or" operation.

const x :number = 6;
const y :number = 12;
const z :number = 16;

console.log(x < y && y < z);  //true
console.log(x < y || y < z); //true
console.log(x > y && y > z); //false
console.log(x > y || y > z); //false

//test whether an item is in array.

const flowers :string[] = ['Rose','Freesia','Jasmine'];

console.log('Test "Jasmine" in the array: ',flowers.includes('Jasmine')); //true


//test whether an item is not in an array.

const colours :string[] = ['Blue','Orange','Pink','Purple'];

console.log('Test "Black" is not in  array:', !colours.includes('Black')); //true




















