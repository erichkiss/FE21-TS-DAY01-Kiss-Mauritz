// Basic ex 3

// Create an array of names, this array should only accept strings.

// 1. Print only the index of the elements.
// 2. Print only the values. 
// 3. Print both index and values.

let nameArray : string [] = ["Matthias","Erich","Evelyn","Valentin","Cornelia","Mario","Michael","Natalia","Ronny","Gregor"];

for (let i in nameArray) {
    console.log("Only the Index printed " + i);
};

for (let i of nameArray) {
    console.log("Only the Value printed " + i);
};



// without fat arrow function (noob style)
// nameArray.forEach(function (value, index) {
//     console.log("Value= " + value + "\nIndex= " + index);
// });

//for da real pros
nameArray.forEach((value, index) => (console.log("Value= " + value + "\nIndex= " + index)));

// console.log(i);