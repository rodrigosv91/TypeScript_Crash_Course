"use strict";
let id_user = 5;
let id = 5;
let company = 'My IT company';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
let arrStudent;
arrStudent = ['Ken', 1];
let person = [1, 'jon', true];
let employee;
employee = [
    [1, 'Peter'],
    [2, 'Brad'],
    [3, 'Jill']
];
let p_id = 22;
p_id = 22;
var Level;
(function (Level) {
    Level[Level["Low"] = 1] = "Low";
    Level[Level["Medium"] = 2] = "Medium";
    Level[Level["High"] = 3] = "High";
})(Level || (Level = {}));
let lv = Level.Medium;
var Level2;
(function (Level2) {
    Level2["Low"] = "Low";
    Level2["Medium"] = "Medium";
    Level2["High"] = "High";
})(Level2 || (Level2 = {}));
console.log(lv);
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: 'Mike'
};
const user3 = {
    id: 3,
    name: 'Feige',
    status: true
};
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log(123);
const user1 = {
    id: 1,
    name: 'Gil',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
console.log(brad.register());
class Cat {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `${this.name} says: Meow!`;
    }
}
const cat = new Cat("Kitty");
console.log(cat.makeSound());
class AbstractPerson {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends AbstractPerson {
    constructor(id, name, code) {
        super(id, name);
        this.empCode = code;
    }
    returnOther() {
        return new Employee(7, "Loki", 1);
    }
}
const emp = new Employee(13, '', 2);
const emp2 = emp.returnOther();
console.log(emp);
console.log(emp2);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Pink', 'Red', 'Blue']);
numArray.push(5);
strArray.push('Green');
console.log(strArray);
