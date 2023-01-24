"use strict";
let num1 = [2, 2, 2, 4];
let num2 = [1, '2', 2];
function arrays(Oarr1, Oarr2, callback) {
    let outputarr = callback(Oarr1, Oarr2);
    {
        console.log(Oarr1);
    }
    console.log(outputarr);
}
arrays(num1, num2, (v1, v2) => {
    let v3 = v1.concat(v2);
    return v3;
});
//# sourceMappingURL=ts_arrays.js.map