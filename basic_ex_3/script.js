// Basic ex 3
// Create an array of names, this array should only accept strings.
// 1. Print only the index of the elements.
// 2. Print only the values. 
// 3. Print both index and values.
var nameArray = ["Matthias", "Erich", "Evelyn", "Valentin", "Cornelia", "Mario", "Michael", "Natalia", "Ronny", "Gregor"];
for (var i in nameArray) {
    console.log("Only the Index printed " + i);
}
;
for (var _i = 0, nameArray_1 = nameArray; _i < nameArray_1.length; _i++) {
    var i = nameArray_1[_i];
    console.log("Only the Value printed " + i);
}
;
// without fat arrow function (noob style)
// nameArray.forEach(function (value, index) {
//     console.log("Value= " + value + "\nIndex= " + index);
// });
//for da real pros
nameArray.forEach(function (value, index) { return (console.log("Value= " + value + "\nIndex= " + index)); });
// console.log(i);
