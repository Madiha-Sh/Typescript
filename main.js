"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome to typescript world';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'madiha';
var sentence = "My name is ".concat(name, ". I am a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 22, 23];
var color;
(function (color) {
    color[color["red"] = 10] = "red";
    color[color["green"] = 11] = "green";
    color[color["yellow"] = 12] = "yellow";
})(color || (color = {}));
;
var c = color.yellow;
console.log(c);
var randomValue = 10;
randomValue = 'something';
randomValue = true;
var myVariable = 10;
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
var a;
a = 10;
a = 'some value';
var b = 20;
var multiType;
multiType = 10;
multiType = false;
var anyType;
multiType = 10;
multiType = true;
// Functions
function add(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(add(5, 10));
console.log(add(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " "));
}
var p = {
    firstName: 'bruce',
    lastName: 'wayne'
};
fullName(p);
// class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.eName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.eName));
    };
    return Employee;
}());
var emp1 = new Employee('Vishvas');
// console.log(emp1.eName);
emp1.greet();
// class based inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks to ".concat(this.eName));
    };
    return Manager;
}(Employee));
var emp2 = new Employee('XYZ');
var m1 = new Manager('Bruce');
// console.log(m1.eName);
m1.greet();
m1.delegateWork();
// access modifiers
// public - free accessibility
// private - only within the class
// protected - within the class itself and it's derived classes only
