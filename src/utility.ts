// Partial
interface Point {
  x: number;
  y: number;
}

// `Partial` allows x and y to be optional
let pointPart: Partial<Point> = {};
pointPart.x = 10;

// Required
interface Car2 {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car2> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
}

// `Record` is a shortcut to defining an object type with a specific key type and value type
const nameAgeMap2: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

// `Omit` removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
}

// `Pick` removes all but the specified keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob2: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// `Exclude` removes types from a union.
type Primitive = string | number | boolean
const value2: Exclude<Primitive, string> = true;
// a string cannot be used here since Exclude removed it from the type.

// `ReturnType` extracts the return type of a function type
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

// `Parameters` extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};