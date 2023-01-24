"use strict";
function addi(number1, callback) {
    callback(6);
    return number1;
}
console.log(addi(3, (num) => {
    console.log(num + 2);
    return num;
}));
//# sourceMappingURL=ts_callback.js.map