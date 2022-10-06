// casting with as
let x: unknown = 'hello';
console.log((x as string).length);

// Casting doesn't actually change the type of the data within the variable

// casting with <>
let c: unknown = 'hello';
console.log((<string>c).length);

// Force casting,  first cast to unknown, then to the target type.
let d = 'hello';
// console.log(((d as unknown) as number).length);
