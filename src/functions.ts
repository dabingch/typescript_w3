// can define return value
function getTime(): number {
  return new Date().getTime();
}

function printHello(): void {
  console.log('Hello!');
}

function multiply(a: number, b: number) {
  return a * b;
}

// optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

// default parameter
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// named parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addWithParameter(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// type alias
type Negate = (value: number) => number;

const negativeFunction: Negate = (value) => value * 1;