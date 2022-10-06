// functions
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
// class
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function (value) {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
