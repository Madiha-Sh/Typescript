export {}
let message = 'Welcome to typescript world';
console.log(message); 

let isBeginner: boolean = true;
let total:number = 0;
let name: string = 'madiha';

let sentence: string = `My name is ${name}. I am a beginner in Typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number, number] = ['chris', 22, 23];

enum color {red = 10, green, yellow};
let c: color = color.yellow;
console.log(c); 
 
let randomValue: any = 10;
randomValue = 'something';
randomValue = true;

let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase(); 


// let Variable2: unknown = 10;


// function hasName(obj: any): obj is {name: string} {
//   return !!obj &&
//   typeof obj === 'object' &&
//   'name' in obj
// }

// if(hasName(Variable2)) {
//   console.log(Variable2.name);
// }

// (Variable2 as string).toUpperCase(); 

let a;
a = 10;
a = 'some value';

let b = 20;

let multiType: number | boolean;
multiType = 10;
multiType = false;

let anyType: any;
multiType = 10;
multiType = true;

// Functions
function add(a: number, b?: number): number{
  if(b){
    return a + b;
  }
  else{
    return a;
  }
}
console.log(add(5,10));
console.log(add(5));

// interfaces

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName} `)
}

let p = {
  firstName : 'bruce',
  lastName : 'wayne'
}

fullName(p);

// class

class Employee {
  protected eName: string;

  constructor(name: string) {
    this.eName = name;
  }

  greet() {
    console.log(`Good morning ${this.eName}`);
  }
}

let emp1 = new Employee('Vishvas');

// console.log(emp1.eName);
emp1.greet();

// class based inheritance

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName); // to call base class constructor i.e., employee class
  }
  delegateWork() {
    console.log(`Manager delegating tasks to ${this.eName}`);
  }
}

let emp2 = new Employee('XYZ');
let m1 = new Manager('Bruce');
// console.log(m1.eName);
m1.greet();
m1.delegateWork();

// access modifiers
// public - free accessibility
// private - only within the class
// protected - within the class itself and it's derived classes only

// enums - they store a bunch of numbers in our program and it is immutable
enum myConstants {
  pi = 3.14,
  e = 2.73,
  log2 = 0.3,
  log5 = 0.7
}

const radius: number = 10;
const circumference = Math.floor(2 * myConstants.pi * radius)

console.log(`Circumference of circle is ${circumference}`);

// aliases

type stringOrNum = string | number;

// any 

let mixed: any[] = [];
mixed.push(1);
mixed.push('string');
mixed.push(false);
console.log(mixed);

let ninja : {name: any, age: any};
ninja = {name: 'A', age: "25"};
console.log(ninja);

// interfaces
// interface Point{
//   x: number,
//   y: number
// }

// let drawPoint = (point: Point) => {
//   // ..
// }
 
// drawPoint({
//   x: 1,
//   y: 2
// })

// // Typescript properties

// class Point {
//   constructor(private _x?: number, private _y?: number) {
//   } 

//   draw() {
//     console.log('X: ' + this._x + ', Y: ' + this._y);
//   }

//   get x() {
//     return this._x;
//   }

//   set x(value) {
//     if(value < 0) {
//       throw new Error('value cannot be less than 0');
//     }
//     this._x = value;
//   } 
// }

// let point = new Point(1,2);
// point.draw(); 
// console.log(point.x);
// point.x = 10;
// let x = point.x;
// console.log(x);   

// let count = 5;
// count = 'a';

// let msg;
// let endsWithC = (msg as string).endsWith('c');

// import { module's class-name} from '/.module-name without extension

// export class class-name