//regular js
//let id = 5   

//ts
let id_user: number = 5   
//id = '5'          // error

console.log('ID:', id_user)

//Basic Types
let id: number = 5  
let company: string = 'My IT company'
let isPublished: boolean = true
let x: any = 'Hello'

//let ids = [1,2,3,4,5]             
let ids: number[] = [1,2,3,4,5]     //specified array of numbers
//ids.push('Hello') // error


//Tuples
let arr: any[] = [1, true, 'Hello']   

let arrStudent: [string, number]   //array with a fixed number of elements whose types are known
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
enum Level {       //set of named constants (as java)
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

// Objects
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

// Type Assertion
let cid: any = 1       
let customerId = <number>cid         // modo 1
let customerId2 = cid as number      // modo 2

// Functions
function addNum(x: number, y: number): number{      // fix x has an 'any' type error option 1: allow noImplicitAny
    return x + y                                    //option 2: assign type
}

function log(message: string | number): void{       //void
   console.log(message)
}
