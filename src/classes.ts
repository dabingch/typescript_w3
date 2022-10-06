class Person {
  name: string = 'hello';
}

const person = new Person();
person.name = "Jane";

class Person2 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName());

// parameter properties
class Person3 {
  public constructor(private name: string) {

  }

  public getName(): string {
    return this.name;
  }
}

class Person4 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

// inheritance: Implements
interface Shape {
  getArea: () => number;
}

class Triangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Triangle[width=${this.width}, height=${this.height}]`;
  }
}

// extends
class Square extends Triangle {
  public constructor(width: number) {
    super(width, width);
  }

  // override
  public override toString(): string {
      return `Square[width=${this.width}]`;
  }
}

// abstract
abstract class Polygon {
  public abstract getArea(): number;
}

class childClass extends Polygon {
  public constructor(protected readonly width: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.width;
  }
}

