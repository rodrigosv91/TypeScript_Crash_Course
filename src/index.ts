//regular js
//let id = 5   

//TypeScript
let id_user: number = 5   // id = '5'  == error

//Basic Types
let id: number = 5  
let company: string = 'My IT company'
let isPublished: boolean = true
let x: any = 'Hello'
         
let ids: number[] = [1,2,3,4,5]     // specified Array of numbers  // not specified //let ids = [1,2,3,4,5]   //ids.push('Hello') // error


//Tuples
let arr: any[] = [1, true, 'Hello']   

let arrStudent: [string, number]   // array with a fixed number of elements whose types are known
arrStudent = ['Ken', 1]

let person: [number, string, boolean] = [1, 'jon', true]    //same spots

//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Peter'],
    [2, 'Brad'],
    [3, 'Jill']
]

//Union
let p_id: string | number = 22  // one or another allowed
p_id = 22 // or  p_id = '22'

//Enum
enum Level {       // set of named constants (as java)
   Low = 1,        // start at 1 next 2,3 ... | default start: 0
   Medium,
   High
}
let lv: Level = Level.Medium    //let lv2: string = Level[2]    // gets the enum name at positon 2

enum Level2 {      
    Low = 'Low',        
    Medium = 'Medium',
    High = 'High'
 }

console.log(lv)     // console.log(Level.Medium) // console.log(Level[2])

//Objects
const user = {      //modo 1
    id:1,
    name: 'John'
}

const user2: {      //modo 2
    id: number,
    name: string
} = {
    id: 2,
    name: 'Mike'
}

type User3 = {      //modo 3
    id: number,
    name: string,
    status: boolean
} 
const user3: User3 = {  //use created type 'user3'
    id: 3,
    name: 'Feige',
    status: true
}

//Type Assertion
let cid: any = 1       
let customerId = <number>cid         // modo 1
let customerId2 = cid as number      // modo 2

//Functions
function addNum(x: number, y: number): number{      // fix x has an 'any' type error option 1: allow noImplicitAny
    return x + y                                    //option 2: assign type
}

function log(message: string | number): void{       //void
   console.log(message)
}
log(123)

//Interfaces
interface UserInterface {       // same as object but doesn't allow unions, for example, and classes that use it have to use implement all non optional properties
    readonly id: number,        // interface Point = number | string // == error
    name: string,               
    age?: number                // optional
} 
const user1: UserInterface = {  
    id: 1,
    name: 'Gil',
}   //user1.id = 5                    // error


//Interfaces + Functions
interface MathFunc{
    (x: number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y

//Classes 
class Person{
    id: number          // properties must be initialized or assigned
    name: string        // properties can have data modifiers (private, protected, public == default)

    constructor(id: number, name: string){      
        this.id = id
        this.name = name
    }     
    register(){         // methods  // could be getters & setters, toString, etc
        return `${this.name} is now registered`
    }
}
const brad = new Person(1,'Brad') 
console.log(brad.register())

// Implementing Classes Interfaces
interface AnimalInterface {             
    name: string    
    makeSound(): string             
}
class Cat implements AnimalInterface{       //all properties and methods must be implemented
    name: string    
    constructor(name: string){
        this.name = name
    }
    makeSound(): string {
        return `${this.name} says: Meow!`   // return 1 // error
    }
}
const cat = new Cat("Kitty")
console.log(cat.makeSound())

//Extending Classes (Subclasses) // Abstract
abstract class AbstractPerson {
    id: number
    name: string;
    constructor(id: number, name: string) {
        this.id = id
        this.name = name;
    }
    display(): void{
        console.log(this.name)
    }
    abstract returnOther(): AbstractPerson
}

class Employee extends AbstractPerson { 
    empCode: number;
    constructor(id: number,name: string, code: number) { 
        super(id, name);                                    // must call super()
        this.empCode = code;
    }
    returnOther(): AbstractPerson { 
        return new Employee(7, "Loki", 1);                  //Employee is a kind of AbstractPerson
    }
}

const emp = new Employee(13, '', 2)
const emp2 = emp.returnOther()

console.log(emp)
console.log(emp2)