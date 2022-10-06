// enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North';
var CardinalDirectionsInitialized;
(function (CardinalDirectionsInitialized) {
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["North"] = 1] = "North";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["East"] = 2] = "East";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["South"] = 3] = "South";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["West"] = 4] = "West";
})(CardinalDirectionsInitialized || (CardinalDirectionsInitialized = {}));
console.log(CardinalDirectionsInitialized.North);
console.log(CardinalDirectionsInitialized.West);
