"use strict";
let num1 = [2, 2, 2, 4];
let num2 = [1, '2', 2];
function arrays(Oarr1, Oarr2, callback) {

    let outputarr = callback(Oarr1, Oarr2);
    {
        let val = Oarr1.concat(Oarr2);
        console.log(val);
        return val;
    }
   
    console.log(outputarr)
}

console.log(arrays(num1, num2, () => {}));
//# sourceMappingURL=ts_arrays.js.map


//EXPLANATION OF UNREACHABLE CODE  : the return statement works for the funciton arrays since the callback fx does not have any reutrn type
/* In this code the console.log(outputarr) statement is unreachable because it's located after a return statement, which terminates the execution of the function. Once the function reaches a return statement, it exits the function and any code after the return statement will not be executed.

The reason for this is that the callback passed to the arrays function is an empty arrow function () => {} which doesn't return any value, so outputarr is undefined.

Also, let val = Oarr1.concat(Oarr2); concatenates two arrays and returns the new concatenated array, and this value is returned by the function, so the function call console.log(outputarr); never executed.

If you want to see the concatenated array, you can call console.log(val); right after the return statement or you can assign the returned value to a variable outside the function and print it */