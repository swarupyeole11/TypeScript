"use strict";
function addi(number1, callback) {
    callback(6); // Fun fact is you pass here another parmeter the callback function will accept it and it is the reason why JS is so fucked up In type script you will not bw allowed to do such buffonery
    return number1;
}
console.log(addi(3, (num) => {
    console.log(num + 2);
    return num;
}));
//# sourceMappingURL=ts_implementmaps.js.map