let value1: string | undefined | null = null;
value1 = 'hello';
value1 = undefined;

// When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.

// optional changing
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}
function printYardSize(house: House) {
  const yardSize = house.yard?.sqft;
  if (yardSize === undefined) {
    console.log('No yard');
  } else {
    console.log(`Yard is ${yardSize} sqft`);
  }
}

let home: House = {
  sqft: 500
};

printYardSize(home); // Prints 'No yard'

// Nullish Coalescence ??
// It allows writing expressions that have a fallback specifically when dealing with null or undefined
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'

// Null Assertion !
function getValue(): string | undefined {
  return 'hello';
}
let value3 = getValue();
console.log('value length: ' + value3!.length);

// arrays bounds handling
let array: number[] = [1, 2, 3];
let value4 = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`