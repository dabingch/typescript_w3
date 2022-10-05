// object 
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// optional ?
const optionalCar: { type: string, mileage?: number } = {
  type: "Toyota"
};

optionalCar.mileage = 2000;

// index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "fifty";
