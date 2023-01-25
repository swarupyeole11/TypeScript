"use strict";

//
function kgtoLbas(weight) {
    if (typeof weight === 'number') {
        weight = weight * 0.2;
        return weight;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

// Intersection
let textBox = {
    drag: () => console.log("jej"),
    resize: (num) => num * 4
};
console.log(textBox.resize(4));
//# sourceMappingURL=ts_union.js.map

