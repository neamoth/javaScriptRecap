/*
Expression:
Statement of value, variable, and operations into a single value

Like 6*5=30

Literal:

Fixed value: Literal - "Jhon" or 5
Variable value: Variable - let x, Now x can be assign any number

Variable: (Storing data)

var - can declare and assign later, can redeclare
let - ES6 2015, Let can not be redeclared, #Block Scope(can not access outside of scope)
const - Never changed, 

Global Scope - Live the hole house
function Scope -Like a room
#Block Scope - {} curly brackets
(not like function scope with declarations function a {})

 */

let x = "Neamoth"
//let x = 5 syntax error

// Block Scope

{
   let scope = 2;
   console.log(scope + " inside the block")
}

console.log(scope)
//ReferenceError - which is scope reference can not be defined