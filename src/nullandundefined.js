var value1 = null;
value1 = 'hello';
value1 = undefined;
function printYardSize(house) {
    var _a;
    var yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log("Yard is ".concat(yardSize, " sqft"));
    }
}
var home = {
    sqft: 500
};
printYardSize(home); // Prints 'No yard'
// Nullish Coalescence ??
// It allows writing expressions that have a fallback specifically when dealing with null or undefined
function printMileage(mileage) {
    console.log("Mileage: ".concat(mileage !== null && mileage !== void 0 ? mileage : 'Not Available'));
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
// Null Assertion !
function getValue() {
    return 'hello';
}
var value3 = getValue();
console.log('value length: ' + value3.length);
