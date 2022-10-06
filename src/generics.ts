// functions
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>('hello', 42));

// class
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(value: T | undefined) {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString());

// aliases
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// Default value
class DefaultValue<T = string> {

}

// extends
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T) {

}