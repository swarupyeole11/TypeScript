"use strict";
function calculateTax(salary, taxyear = 2022) {
    if (salary > 500000 && taxyear > 2021) {
        return (salary - 500000) * 0.1;
    }
    return 0;
}
function calculateTax2(salary, taxyear) {
    if (salary > 500000 && (taxyear || 2022) > 2021) {
        return (salary - 500000) * 0.1;
    }
    return 0;
}
console.log(calculateTax(6000000));
//# sourceMappingURL=ts_functions.js.map