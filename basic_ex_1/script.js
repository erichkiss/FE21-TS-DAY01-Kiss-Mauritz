var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// other method of defining the array
// let numberArray : Array <number> = [1,2,3,4,5,6,7,8,9,10];
// #1 way to do it 
// function multiply () {
//     for (let i of numberArray) {
//         for (let j of numberArray) {
//         let product = j * i;
//         console.log(`Calc: ${j} x ${i} = ${product}`);
//         }
//     }
// };
// #2 way to do it
// function multiplyAlt(){
//     for (let i = 0; i < numberArray.length; i++){
//         for (let j = 0; j < numberArray.length; j++){
//         let product = numberArray[i] * numberArray[j];
//         console.log(`${product}`);
//         }
//     }
// }
// multiply();
//multiplyAlt();
// Basic ex 2
// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
var object_name = [{
        fName: "Matthias",
        lName: "Mauritz"
    }, {
        fName: "Erich",
        lName: "Kiss"
    }];
//first name printing function
function printMatthias10() {
    for (var i = 0; i < 5; i++) {
        object_name.forEach(function () {
            console.log(object_name[0].fName);
        });
    }
}
;
printMatthias10();
function printMauritz10() {
    for (var i = 0; i < 5; i++) {
        console.log(object_name[0].lName);
    }
}
setTimeout(function () {
    printMauritz10(); //need to use a callback function for setTimeOut(), can then call a function in that callback! :)
}, 5000);
