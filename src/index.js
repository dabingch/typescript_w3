var firstName = "Dylan";
console.log(firstName);
var json = JSON.parse("55");
console.log(typeof json);
// any type
var v = true;
v = "string";
Math.round(v);
// unknown
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// never, always throws an error
// let x: never = true;
// undefined and null
var y = undefined;
var z = null;
// array
var names = [];
names.push("Dylan");
// readonly, prevent arrays from being changed
var namesReadonly = ["Dylan"];
// namesReadonly.push("Jack");
// Type Inference
var numbers = [1, 2, 3];
numbers.push(4);
