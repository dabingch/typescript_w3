// enum
enum CardinalDirections {
  North,
  East,
  South,
  West
}

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North';

enum CardinalDirectionsInitialized {
  North = 1,
  East,
  South,
  West
}

console.log(CardinalDirectionsInitialized.North);
console.log(CardinalDirectionsInitialized.West);

enum CardinalDirectionsString {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West'
}