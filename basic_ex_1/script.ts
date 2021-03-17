let numberArray : number [] = [1,2,3,4,5,6,7,8,9,10];
// other method of defining the array
// let numberArray : Array <number> = [1,2,3,4,5,6,7,8,9,10];

function multiply () {
    for (let i of numberArray) {
        for (let j of numberArray) {
        let product = j * i;
        console.log(`Calc: ${j} x ${i} = ${product}`);
        }
    }
};

multiply();