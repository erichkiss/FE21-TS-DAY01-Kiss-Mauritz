var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// other method of defining the array
// let numberArray : Array <number> = [1,2,3,4,5,6,7,8,9,10];
function multiply() {
    for (var _i = 0, numberArray_1 = numberArray; _i < numberArray_1.length; _i++) {
        var i = numberArray_1[_i];
        for (var _a = 0, numberArray_2 = numberArray; _a < numberArray_2.length; _a++) {
            var j = numberArray_2[_a];
            var product = j * i;
            console.log("Calc: " + j + " x " + i + " = " + product);
        }
    }
}
;
multiply();
