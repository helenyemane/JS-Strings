let theString = `The child walked to the market`;
console.log(theString.charAt(0).toUpperCase() + theString.slice(1));

let toBeAdded = "x";
let char = 3;
console.log(theString.slice(0,char) + toBeAdded + theString.slice(char));

let sentence = "hello world, hello JavaScript!";
let count = (sentence.match(/hello/g) || []).length;
console. log(count);

let lChar = sentence.slice(-3);
console.log({lChar});

let fChar = sentence.slice(0,3);
console.log({fChar});

let sortStr = sentence.split('').sort().join('');
console.log({sortStr});

let removeSpace = sentence.replace(/\s+/g, '');
console.log(removeSpace);

let word="greeting";
let find=word.indexOf('t');
console.log(find);

let deleteTwofchar = word.slice(2);
console.log(deleteTwofchar);

let deleteTwolChar = word.slice(0, -2);
console.log(deleteTwolChar);
