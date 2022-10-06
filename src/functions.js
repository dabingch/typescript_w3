// can define return value
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
// optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
