let firstName: string = "Dylan"
console.log(firstName);

const json = JSON.parse("55");
console.log(typeof json);

// any type
let v: any = true;
v = "string";
Math.round(v);

// unknown
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// never, always throws an error
// let x: never = true;

// undefined and null
let y: undefined = undefined;
let z: null = null;

// array
const names: string[] = [];
names.push("Dylan");

// readonly, prevent arrays from being changed
const namesReadonly: readonly string[] = ["Dylan"];
// namesReadonly.push("Jack");

// Type Inference
const numbers = [1, 2, 3];
numbers.push(4);