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
const - Never changed, const can not be re-assign.

Global Scope - Live the hole house
function Scope -Like a room
#Block Scope - {} curly brackets
(not like function scope with declarations function a {})

 */

let x = "Neamoth"
//let x = 5 syntax error

// Block Scope

{
   let x = 2;
   console.log(x + " inside the block")
   // It will not be re-declared on global space
}

console.log(x)
//ReferenceError - which is scope reference can not be defined
x = 3;
console.log(x + " After reassign")

/* 
Const: When we use it?
   1. New Array
   2. New Function
   3. New Object
   4. New RegExpression

What we can't do? Reassign
What we can do? 
   Element of array
   Properties of object
   
Block Scope is same for const also

*/

const c = 4
{
   const c = 5 // reassign in scope but  it can be re-declared in global scope
   console.log(c + " Const in Local Scope")
}
// const c = 5 SyntaxError: Identifier 'c' has already been declared
console.log(c + " Const in global Scope")


// Array and object

{
   const array = ["Neamoth", "Sakib vai", "Imtiaz vai"]
   console.log(array + " Before change")
   array.push("Nahid")
   console.log(array + " After change")
}


/*
Operators:

Types:

Increment and decrement operators.
Bitwise operators.
Assignment operators.
Logical operators.
Relational operators.
Special operators.
Conditional operators.
Arithmetic Operators.

*/

//Concatenate operators

{
   let x = "Neamoth get the marks: "
   let y = 5
   let z = "0" //here this 0 is a string

   console.log(x + z + y)
   console.log(typeof (z))//string
}

//Assignments Operators

{
   let x = 5, y = 10
   var z = 15
   // assignment practice
   console.log("The value of z: " + z)
   console.log("1. " + (z = (x - y)))
   console.log("Now the value of z: " + z)
   console.log("2. " + (x))
   console.log("3. " + (x + y))
   console.log("4. " + (x))
}

/*
DataType:

String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

*/
{
   let x = 5 + 6 + " volvo"// Here the int will be get priority
   let y = "volvo" + 5 + 6// here the string will be get priority
   console.log(x)
   console.log(y)
}

{
   // javascript is dynamically typed because a single variable can hold multiple date types
   let x = "Neamoth is string" // this is now string
   console.log(x + " is now a: " + typeof (x))
   x = 4 // this is now a number
   console.log(x + " is now a: " + typeof (x))
   x = true // this is now boolean
   console.log(x + " is now a: " + typeof (x))
}

{
   //Exponential Notation
   let y = 123e5;    // 12300000
   let z = 123e-5;   // 0.00123
}

{
   //bigInt use for store big integer number is ES 2020
   let x = BigInt(123456789123456789123456789)
   console.log(x)
}

//Object
{
   // an object with 4 properties
   const person = {
      firstName: "Neamoth",
      lastName: "Ullah",
      age: 50,
      educationBackground: "CSE",
      jobHistory: null,
      searchingForJob: true
   }
   // Object structure will be synchronized a to z

   console.log(person) // print the full object
   console.log(person.educationBackground) // print only the Education Background Property
   console.log(person.firstName + " " + person.lastName) // print <fullName></fullName>
   console.log("Person is an: " + typeof (person))
}

{
   /*
      Function
   */
   function displayInput() {
      console.log("Option 1: Add ")
      console.log("Option 2: Sub ")
      console.log("Option 3: Mult ")
      console.log("Option 4: Div ")
   }
   displayInput()
   //let option = prompt("Enter a number to continue: ")

   function calculator(option, a, b) {
      let result
      if (option == 1) {
         result = a + b
      }
      if (option == 2) {
         result = a - b
      }
      if (option == 3) {
         result = a * b
      }
      if (option == 4) {
         result = a / b
      }
      console.log(result)
   }
   //let a = parseInt(prompt("Enter a number: "))
   //let b = parseInt(prompt("Enter b number: "))
   //calculator(option, a, b);
}

{
   /*
      Object in JavaScript
      const bike = new Object();
    
      bike.name = prompt("Enter the bike name: ");
      bike.brand = prompt("Enter the brand: ");
      bike.start = function (){
         let speed = parseInt(prompt("Enter the speed and put 1 to start: "));
         if(speed == 1){
            console.log("Bike started");
            speed = parseInt(prompt("Enter current speed: "));
            if (speed > 1 & speed == 40){
               console.log("Bike is stopped at " + speed)
            }
         
         }
         return this.name + " speed is: " + speed;
    
      }
    
      let option = parseInt(prompt("Enter 1 for name, 2 for brand, 3 for engine: "));
      if(option == 1){
         console.log(bike.name);
      }
      else if (option == 2){
         console.log(bike.brand);
      }
      else if (option == 3){
         console.log(bike.start());
      }else{
         console.log("PLease enter a valid number");
      }
   */

}
{
   // event practices 
   const person = {
      firstName: "Khadiza",
      lastName: "Noor",
      age: "2 Month and 13 Days",
      fathersName: "MD. Neamoth Ullah"
   }
   function fullName() {
      document.getElementById('name').innerHTML = person.firstName + " " + person.lastName
   }
   function age() {
      document.getElementById('age').innerHTML = person.lastName + "'s Age is: " + person.age;
   }
   function fathersName() {
      document.getElementById('fathersName').innerHTML = person.fathersName + " is the father of, " + person.lastName
   }
   function clearAll() {
      document.getElementById('name').innerHTML = ''
      document.getElementById('age').innerHTML = ''
      document.getElementById('fathersName').innerHTML = ''
   }
}
{
   // String practice

   let name = " Neamoth is a Good father          ";
   document.getElementById('display').innerHTML = name
   document.getElementById('display2').innerHTML = "Repeat: " + name.repeat(2)
   document.getElementById('display3').innerHTML = "Replace: " + name.replace("Neamoth is good boy")
}
{
   //Search With Practices: 
   let inputText = "Neamoth is a good father. His baby name is Khadiza Noor. Wife is Mitu"
   function displayText() {
      document.getElementById('displayText').innerHTML = inputText
   }
   function search() {
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString1').innerHTML = inputText.search(text);
   }
   function match() {
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString2').innerHTML = inputText.match(text);
   }
   function searchAll() {
      let text = document.getElementById("searchValue").value;
      document.getElementById('displayString3').innerHTML = inputText.matchAll(text);
   }
}
{
   // search in console.log
   let inputText = "Neamoth is a good father. His baby name is Khadiza Noor. Wife is Mitu"
   console.log(inputText)
   console.log("search: is in " + inputText.search("Neamoth") + " index")
   console.log("match: " + inputText.match(/is/) + " has been found")
   console.log("matchAll: " + Array.from(inputText.matchAll(/is/gi)) + " has been found")
   console.log("startWith: Neamoth is " + inputText.startsWith("Neamoth") + " ")
   console.log("endsWith: Neamoth is " + inputText.endsWith("Neamoth") + " ")
}
{
   //String Template:
   function show() {
      let fn = document.getElementById("fn").value;
      let ln = document.getElementById("ln").value;
      let result = `Full name: ${fn} ${ln}`;
      document.getElementById('nameDisplay').innerHTML = result;
   }
   show()
}

{
   /**
    Normal integer number without expotential notation can be 
    writen upto 15 digit correctly

    Like: 12345678901234
    */
   let faultInteger = 99999999999999999 // longer then 15
   document.getElementById('faultNumber').innerHTML = faultInteger;
}

{
   //numbers:

   let number = 9.112; // This is a integer number now
   console.log(`${number}'s String is ${number.toString()}`); // This is a string number
}

{
   //array in javascript

   const personObject = {
      firstname: 'Neamoth',
      lastName: 'Ullah',
      age: 27
   }
   const personArray = ['Neamoth', 'Nahid', 'Saima', 'Samira']
   console.log(`Javascript denotes all array as Object
      For Example: 
      personObject = ${typeof (personObject)},
      personArray = ${typeof (personObject)},
      - To solve this problem Array can be recognized with "isArray"
      PersonObject = ${Array.isArray(personObject)} because it's Object,
      PersonArray = ${Array.isArray(personArray)}, because it's Array
      - Another way is to use "instanceof"
      PersonArray = ${personArray instanceof Array}, because it's Array
      `)

   // To add something in array is,
   personArray.push('Noor');
   personArray[personArray.length] = 'Noor er ammu';
   console.log();
   console.log(`After pushing through .push function and length
      array is, ${personArray} &
      length is, ${personArray.length}
      
      Accessing the 1st index of the array: ${personArray[0]}
      Accessing the Last index of the array: ${personArray[personArray.length - 1]}

      Note: Array with name index is call object

      `);
   // array using new create problem so its better use []
   const problemArray = new Array(40);
   const safeArray = [40];
   console.log(`
         safe array is ${safeArray} and
         problem array is ${problemArray}
         `)
}

{
   /*Array Methods:
   Basic Array Methods
      1.1 Array length
      1.2 Array toString()
      1.3 Array at()
      1.4 Array join()
      1.5 Array pop()
      1.6 Array push()
      1.7 Array unshift()
      1.8 Array delete()
      1.9 Array concat()
      1.10 Array copyWithin()
      1.11 Array flat()
      1.12 Array splice()
      1.13 Array toSpliced()
      1.14 Array slice()
   */
   //Declearation
   const fruits = ["banana", "Grape", "Pineapple", "Cherry", "Avocado", "Guava", "Coconut", "Muskmelon"];
   const concat = ["Watermelon", "pear", "Kiwi"]
   document.getElementById('arrayMethods').innerHTML = `The Array = ${fruits}</br>
1.1 Array Length</br>
- Length = ${fruits.length}</br></br>
1.2 Array toString()</br>
- Before Array Type isArray? = ${Array.isArray(fruits)}</br>
- After Array type = ${Array.isArray(fruits.toString())}, type is = ${typeof (fruits.toString())}</br></br>
1.3 Array at()</br>
- The 3rd element of the array = ${fruits.at(2)}</br></br>
1.4 Array join() - is use for joining all the elements in the array together</br>
- Join array with # = ${fruits.join('#')}, type =  ${typeof (fruits.join('#'))}</br></br>
1.5 Array pop() - It's use for remove the last element of the array <br>
- Array before using pop function = ${fruits}</br>
- Array after using pop function remove = ${fruits.pop()}, Now array = ${fruits}</br><br>
1.6 Array push() - Its use for add any element on last index</br>
- adding apple in array at ${fruits.push('Apple')} index, array now  - ${fruits}</br><br>
1.7 Array unshift() - Use for add element in 1st index of array</br>
- Adding Mango in ${fruits.unshift('Mango')} , Array = ${fruits} </br></br>
1.8 Array delete()- is now wise to use because it make an hole to the index and insert undefine</br>
-Use pop or shift instead</br></br>
1.9 Array concat() - use for join two array</br>
- concat result = ${fruits.concat(concat)}</br></br>
1.10 Array copyWithin() - </br>
- Result = ${fruits.copyWithin(length - 1, 5)} [Note- here (lenght-1) will be the index position where
the copy item will <b></b>e place and 5 is the item index which will be copied] </br></br>
1.11 Array flat()</br>
</br></br>

</br></br></br></br></br>
</br>
`
}

{
   /*
   Array search
   Array indexOf()
   Array lastIndexOf()
   Array includes()
   */

   //indexof()
   const search = ["banana", "Grape", "Pineapple", "Cherry", "banana", "Avocado", "Guava", "Coconut", "Muskmelon"];
   const position = search.indexOf('banana') + 1;
   const lastPosition = search.lastIndexOf('banana') + 1;
   const includes = search.includes('Cherry');
   console.log(`position of 1st banana found in ${position}`);
   console.log(`position of last banana found in ${lastPosition}`);
   console.log(`Cherry is in the array? ${includes}`);
}
{
   /*
   Array sort:

   Alphabetic Sort
      Array sort()
      Array reverse()
      Array toSorted()
      Array toReversed()

   Numeric Sort
      Numeric Sort
      Random Sort
      Math.min()
      Math.max()
      Home made Min()
      Home made Max()
   
   */
   console.log(`
      Array Sort
      `
   )
   const alphabeticSort = ["banana", "Grape", "Pineapple", "Cherry", "banana", "Avocado", "Guava", "Coconut", "Muskmelon"];
   console.log(`Array is = ${alphabeticSort.toString()}`)

   const sorted = alphabeticSort.toSorted();
   console.log(`Result of sortingTo = ${sorted}`) // Its create a new array and make the original unchanged

   const reversed = alphabeticSort.toReversed();
   console.log(`Result of toReverse = ${reversed}`) // Its create a new array and make the original unchanged

   const sortAsy = alphabeticSort.sort();
   console.log(`Result of sorting = ${sortAsy}`)

   const reserve = alphabeticSort.reverse();
   console.log(`Result of reversing = ${reserve}`)

}
{
   //Numeric Sort
   console.log(`
      Number Sort
      `)
   const sorting = [40, 5, 32, 4, 3, 1, 85, 20, 12, 11, 30];

   // Sorting order low to high
   const asySort = sorting.sort((a, b) => a - b);
   console.log(`Result of asySorting = ${asySort}`);

   const desSort = sorting.sort((a, b) => b - a);
   console.log(`Result of desSorting = ${desSort}`);
   /*
   Important note: 
   JavaScript sort using TimSort algorithm which is a hybrid approach of
   marge sort and insertion sort algorithm
   */

}

{
   /*
   forEach, Map, Filter and reduce
   */
   const names = ["Neamoth", "Mitu", "Noor"];
   //use of foreach
   let text = "";
   function family(value, index, array) {
      text += "Member " + (index + 1) + ": " + value + "</br>";
   }
   names.forEach(family)
   document.getElementById('forEach').innerHTML = text + "</br>";

   function mapTxt(value, index, array) {
      return "Name: " + value;
   }
   let mapText = names.map(mapTxt);
   document.getElementById('mapText').innerHTML = mapText + "</br>";



}

var names = ["Neamoth", "Mitu"];
{
   //Array Const
   var names = ["Samira", "Mitu"];
   var outputArray = names[0];
   document.getElementById('constArrayB').innerHTML = `This is in block scope ${outputArray} <br />`;
}
document.getElementById('constArrayG').innerHTML = `This is in global scope ${outputArray} <br />`;

{
   const date = new Date();
   const newDate = new Date("2024-11-11");
   console.log(date);
   console.log(newDate);
   /*
   new Date(year,month,day,hours,minutes,seconds,ms)
   */
}

{
   /*Math in javascript
   Math.E        // returns Euler's number
   Math.PI       // returns PI
   Math.SQRT2    // returns the square root of 2
   Math.SQRT1_2  // returns the square root of 1/2
   Math.LN2      // returns the natural logarithm of 2
   Math.LN10     // returns the natural logarithm of 10
   Math.LOG2E    // returns base 2 logarithm of E
   Math.LOG10E   // returns base 10 logarithm of E
   */
   console.log(Math.PI);
   let r = 2;
   let piRSqure = Math.PI * (r * r);
   let useingPow = Math.PI * (Math.pow(r, 2));
   console.log(piRSqure);
   console.log(useingPow);
   console.log(Math.ceil(4.9)); // round up
   console.log(Math.floor(4.9)); // round down
   console.log(Math.trunc(-4.9)); // round
   console.log(Math.max(0, 150, 30, 20, -8, -200)); // return max
   console.log(Math.min(0, 150, 30, 20, -8, -200)); // return min
   console.log(Math.floor(Math.random() * 10));// random value upto o-9
   console.log(Math.floor(Math.random() * 10) + 1);// random value upto 1-10
}
{
   //math random capture practice

   let a = Math.floor(Math.random() * 11);
   document.getElementById('number1').innerHTML = a;
   let b = Math.floor(Math.random() * 11);
   document.getElementById('number2').innerHTML = b;
   let result = a + b;

   function resCap() {
      let resultInput = parseInt(document.getElementById('inputAddition').value);
      if (result === resultInput) {
         document.getElementById('resultCapture').innerHTML = `Your answer ${resultInput} is correct!`;
      }
   }
   resCap();
}

{
   //Conditional Statement in javascript

   let number = 20;
   if (number === 15) {
      console.log(`Number is 15`);
   } else if (number > 15) {
      console.log(`Number Greater Then 15`);

   } else {
      console.log(`Number less then 15`);

   }
}
{
   //Switch
   let day = 0;
   switch (day) {
      case 0:
         text = `Saturday`;
         break;
      case 1:
         text = `Sunday`;
         break;
      case 3:
         text = `Monday`;
         break;
      default:
         text = `No Days`;
         break;
   }
   console.log(text); // return Saturday

}

{
   //Loop
   //For loop

   let i = 1; // If start with 0, then there will be 6 numbers
   for (let i = 1/* if we don't use let then i will be 6 in end*/; i <= 5; i++) {
      console.log(`Number is Now, ${i}`);
   }
   console.log(i); // using loop scope

   //For In Loop for object
   const cars = { 1: "Toyota", 2: "Lamborgini", 3: "Audi" };
   for (let names in cars) {
      console.log(`Car ${names}: ${cars[names]}`);
   }
   // For In Loop for Iterable object works in string too
   let name = "Mitu";
   for (let words in name) {
      console.log(name[words]);

   }

   // Do While loop

   /*
   we can run a do white loop with do in condition or some code and while
   to stop the code.
   Like a libarary management system options
   */

}

{
   //set
   const l = new Set(["a", "b", "c", "d", "e", "f"]);
   l.add("test"); // for adding in set
   l.delete("f") // for deleting in set
   console.log(`Test in the Loop : ${l.has("test")}`);
   console.log(`Size of the set: ${l.size}`);
   // l.clear(); use for clear the set

   /*
   Set can we also assign as:
   const s = new Set();
   */

   let i = 1; // It has to be declear global scope
   for (let w of l) {
      console.log(`Letter ${i} is ${w}`);
      i++; // In loop scope the value will not increase
   }
}
{
   // map
   // Two way to call a map
   const map1 = new Map([
      ["BreakFast", 200],
      ["Launch", 300],
      ["Dinner", 400],
   ]);
   const map2 = new Map();
   map2.set("Neamoth", 500);
   map2.set("Mitu", 300);
   // To add something in Map
   map1.set("Snacks", 500);
   console.log("Snacks Price: " + map1.get("Snacks"));
   console.log("Size is, " + map1.size);
   map1.delete("Snacks");
   console.log("After delete size is, " + map1.size);

   map1.forEach(function (key, value) { console.log(`Price of ${value}: ${key}tk`) });

   //entries
   for (let e of map2.entries()) {
      console.log(e);
   }

   //ES2024 GroupBy Mathods
}

{
   // Distructuring

   const employee = {
      firstName: "Neamoth",
      lastName: "Ullah",
      position: "Software Engineer"
   }

   let { firstName, lastName, salary = 50000 } = employee;
   console.log(firstName + " " + lastName + `& Salary: ${salary}`);
   //we can swipping
   let fn = "Neamoth";
   let ln = "Ullah";
   [fn, ln] = [ln, fn];
   console.log(fn + " " + ln);

   //String with rest
   let names = "Neamoth"
   let [a1, b1, ...rest] = names
   console.log(a1);
   console.log(b1);
   console.log(`rest are ${rest}`);




}

{
   // Regulular Expression

   /*
   Notes:
   Regular expression is use for searching
   There is only two function to work. search(), and replace()
   */

   // Normal Search:
   let text = "Lets find Neamoth Ullah";
   let result = text.search("Neamoth");
   let errorResult = text.search("neamoth");
   console.log("Index number is " + result); // result is 10
   console.log("Index number is " + errorResult); // result is -1 for not found.
   // Now Find with regular expression:
   result = text.search(/neamoth/i);
   console.log("Index number is " + result); // 10 for successful search, i for case insensitive

   // Same for replace with regular expression:
   let replaceText = text.replace(/neamoth ullah/i, "Khadiza Noor");
   console.log(replaceText); // Result is "Lets find Khadiza Noor"

   //test()
   console.log(/N/.test(text)); // returns true
   //exec()
   console.log(/e/.exec(text)); // returns  
}

{
   /*
      Error handling types:
         try - to test a block of code
         catch - handle the error
         finally - after try and catch it will execute 
                  of the result
         throw - custom error

      Error throw in two Parts
      Name: Message
   ex.SyntexError: value in undefine.      
   */

   let json = '{"salary": 50000}';
   try {
      const user = JSON.parse(json);

      if (!user.name) {
         throw new SyntaxError("NameError: Name data is not found!");
      }
      console.log(user.name);

   } catch (e) {
      console.log("Error in JSON: " + e.message);

   }
   finally {
      const user = JSON.parse(json);
      console.log("In finally the salary is " + user.salary);
   }
}

{
   //Hoisting of javascript:

   /*
      In hoisting javascript do like, If we create a variable. it
      allocate the variable in global memory scope.
      because of this reason we can access the variable
      before declare it.

      and for function, JavaScript put the whole code in global
      and console log the whole function. same as varible.
   */
   console.log("Before declearing: ");
   console.log("Number will be: " + number); //undefined
   console.log(neamoth); //Print the whole function
   neamoth(); // Log the "My name is Neamoth"
   console.log("Arrow Function will be: " + arrowFunction); // Undefined
   try {
      arrowFunction();
   } catch (error) {
      console.log(`The function throw the error: ${error}`);

   }

   var number = 10;
   function neamoth() {
      console.log("My name is Neamoth.");

   }
   var arrowFunction = () => {
      console.log("Arrow Function Neamoth");
   }
   console.log("After declearing: ");

   console.log(number); // print 10
   arrowFunction(); // No arrow and print "Arrow Functon Neamoth"

   hoisingNumber = 200; //assign number
   console.log("Hoising Number: " + hoisingNumber); // Print the number 200
   //var hoisingNumber; // after that declearing it and javascript move it into top

   //For let and const

   //try hoising - Will throw an error. This is call **Temporal Dead Zone**

   try {
      console.log("For let: " + letX);
   } catch (error) {
      console.log("Let error: " + error);

   }
   try {

      console.log("For const: " + constX);
   } catch (error) {
      console.log("const error: " + error);
   }

   let letX = 100;
   const constX = 12;



}

{
   //this keyword:

   const employee = {
      firstName: "Neamoth",
      lastName: "Ullah",
      salary: 50000,
      department: "Software Engineer",
      getFullName: function () {
         return this.firstName + " " + this.lastName;
      }
   }
   console.log(employee.getFullName());
   // Basically this. is refer to an object
   //it also use for call and bind
}

{
   //Arrow function:

   let addition = (a, b) => console.log("result " + (a + b));
   addition(10, 20); // output: 30

}

{
   // Class - It's a ES6 Feature in JavaScript

   console.log(`
      
Class in JavaScript`);

   class Cloth {
      constructor(name, brand, price) {
         this.name = name;
         this.brand = brand;
         this.price = price;
      }

      calculateTotalPrice() {
         const salesTex = 0.1;
         const deliveryCharge = 25;
         return (this.price + (this.price * salesTex) + deliveryCharge);
      }
      displayCloth() {
         console.log(`Product: ${this.name}`);
         console.log(`Brand: ${this.brand}`);
         console.log(`Price: $${this.price}`);
      }
   }


   const product1 = new Cloth("Tshirt", "Gucci", 50);
   const product2 = new Cloth("Court", "Armani", 3500);
   const product3 = new Cloth("Pants", "Gucci", 100);

   //const input = parseInt(prompt("Enter a Number: "))
   const input = 3;
   if (input === 1) {
      product1.displayCloth();
      console.log(`Total: $${product1.calculateTotalPrice()} (including salesTex $ Delivery Charges)`);
   } else if (input === 2) {
      product2.displayCloth();
      console.log(`Total: $${product2.calculateTotalPrice()} (including salesTex $ Delivery Charges)`);
   } else if (input === 3) {
      product3.displayCloth();
      console.log(`Total: $${product3.calculateTotalPrice()} (including salesTex $ Delivery Charges)`);
   } else {
      console.log("Invalid choice");
   }
}

//In Depth of  Objects

{
   /*
   Object is basically a Box where properties and methods are gathered
   There are two types of object in JavaScript:
      Object Literal: 
      Singleton Object:
   */
   //Declearing a symbol for use it on object
   const sym = Symbol("laughing");
   //Object with properties and method also using array
   const userDetails = {
      name: "Neamoth",
      'Full Name': "Md. Neamoth Ullah",
      age: 25,
      isMarried: true,
      currentStatus: () => console.log("Coding in vsCode"),
      hobbies: ["Playing Video Game", "Watching English Series", "Riding Bikes"],
      [sym]: "I am a laughing man",
      //Symbol can't be used as key in object
   }

   //Nested Object
   const userInfo = {
      userName: "neamoth",
      fullName: {
         firstName: "Neamoth",
         lastName: "Ullah"
      },
      password: "123abc"
   }

   //Accessing object Properties
   console.log(userDetails.name); //Print Neamoth
   // console.log(userDetails.Full Name); //Throws Syntex Error
   console.log(userDetails["Full Name"]); //Can no be access with dots
   console.log(`2nd Hobby of ${userDetails.name} is, ${userDetails.hobbies[1]}`); //Print Watching English Series  ofcouse

   //symbol and the type
   console.log(userDetails); //type
   console.log(`The symbol output: ${userDetails[sym]}`);

   //Accessing Nested Object
   console.log(`User ${userInfo.userName}'s Full Name: ${userInfo.fullName.firstName} ${userInfo.fullName.lastName}`);

   //SingleTon:
   const userStatus = new Object();
   userStatus.onlineStatus = false;

   //Marging Objects

   //Method 1:
   // const user = Object.assign({}, userInfo, userDetails, userStatus);

   // //lets check now
   // console.log(`User Name: ${user.userName} and Online Status: ${user.onlineStatus}`);

   //Method 2:
   const user = { ...userInfo, ...userDetails, ...userStatus }// most usecase method


   //Checking with ifElse

   if (user.onlineStatus === false) {
      if (user.userName === ('neamoth') && ((/ullah/i).test(user.fullName.lastName)) && (user.password === "123abc")) {
         console.log("Login Successful");
      } else {
         console.log("Login Failed");

      }
   } else {
      console.log("Already logged in");
   }
   let test = "NeamOth";
   console.log(test === (/neamoth/i)); //string and a regular expression can never be equal
}

// Advance Object Part 2:
{
   //ES6
   // Variable can be assigned to object directly

   const firstName = "Neamoth"
   const lastName = "Ullah";
   const age = 27;
   const isWorking = true;

   const user1 = {
      firstName,
      lastName,
      age,
      isWorking,
      //ES6 allow funtions use like this:
      displayDetails() {
         console.log(`Name: ${this.firstName} ${this.lastName}`);
         console.log(`Age: ${this.age}`);
         console.log(`Is Working: ${this.isWorking}`);
      }
   }

   user1.displayDetails();

   //Using function constructor:

   function user2(firstName, lastName, age) {
      const fullname = firstName + " " + lastName;
      return { fullname, age };
   } //its a function for sure

   //But after initialization, its became an objcet
   let user2user1 = user2(firstName, lastName, age);
   console.log(`Name data: ${user2user1.fullname}`);
   console.log(`Age data: ${user2user1.age}`);
   console.log(`Datatype: ${typeof user2user1}`); //type will be object

   //To create multiple user we construct a function and then create object:

   function Users(fName, lName, isLoggedIn) {
      this.firstName = fName;
      this.lastName = lName;
      this.isLoggedIn = isLoggedIn;
   }

   //adding method as prototype.
   Users.prototype.displayDetails = function () {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      (this.isLoggedIn) ? console.log(`Online Status: Yes`) : console.log(`Online Status: No`);
      // instead of using multiline ifelse use above code

      // if(this.isLoggedIn === true){
      //    console.log(`Online Status: Yes`);
      // }else{
      //    console.log(`Online Status: No`);
      // }
   }

   const user3 = new Users("Neamoth", "Ullah", true);
   const user4 = new Users("Mitu", "Akter", false);
   const user5 = new Users("Khadiza", "Noor", false);

   console.log(`Displaying all users:
      `);

   user3.displayDetails();
   user4.displayDetails();
   user5.displayDetails();
}

{

   // More on object: 

   const nullObject = Object.create(null);
   //console.log(nullObject); //doesn't inherit anything from object prototype
   const sampleObject = {};
   //console.log(sampleObject);

   // Object Prototype:

   //Sometimes we need to add properties or methods in object

   function FamilyMember(name, age, roll, number) {
      this.name = name;
      this.age = age;
      this.roll = roll;
      this.number = number;
   }

   const father = new FamilyMember("Abdus Salam", 58, "Ruti Maker", 1777);
   //console.log(typeof father); //Sure its an object

   // Now lets add country in it
   FamilyMember.prototype.country = "Bangladesh"; // It will be same for everyone

   //Now add a method:
   FamilyMember.prototype.hobbies = function (hobby) {
      this.hobby = hobby;
      return hobby;
   }
   const mother = new FamilyMember("Nasrin Akter", 45, "House Wife", 1778);
   mother.hobbies("Cha");
   console.log(mother);
   //console.log(typeof mother.hobbies); its a method.

   //Object Methods:


   //Object assign already we know. its copy and marge two or more object

   //entries:
   console.log(Object.entries(father)); //Create 4 array with new array index

   //Groupby

   const fruits = [
      { name: "apples", quantity: 350 },
      { name: "bananas", quantity: 500 },
      { name: "oranges", quantity: 0 },
      { name: "kiwi", quantity: 2 }
   ];

   function fruitsCallback({quantity}){
      return quantity === 0 ? "Out of stock" : quantity === 2 ? "2 in stock" : "In stock";
   }

   const result = Object.groupBy(fruits, fruitsCallback);
   console.log(result);

   //Object Properties
   
   const gmail = {
      userName : "neamoth", 
      email: `${this.userName}@gmail.com`,
      firstName : "Neamoth",
      lastName : "Ullah",
      counrty: "Bangladesh",
      phoneNumber: "+8801789400417"
   }
   /* 
      when value is false
      writable - property is read only 
      enumerable - property will be ignore and not read
      configurable - can not config with writable or enumerable 
   */
   // Adding new properties and make it read only:
   Object.defineProperty(gmail, "language", {value: "Bangla", writable : false});
   //make some more
   Object.defineProperty(gmail, "userName", {writable:false});
   Object.defineProperty(gmail, "email", {writable:false});
   
   //Now check:
   console.log(gmail.userName);
   gmail.userName = "Neamoth2"; //it will not change
   console.log(gmail.userName); // still neamoth

   
   //avoid any properties in object - enumerable
   Object.defineProperty(gmail, "phoneNumber" ,{enumerable:false});
   let checkEnumerable = [];
   for(let keys in gmail){
      checkEnumerable.push(keys);
   }
   console.log(checkEnumerable); // only name, firstName, lastName, country, language will be printed

   //Prevanting changing any configuration in object
   Object.defineProperty(gmail, "firstName", {configurable:false})

   // Get/Set method in object:

   const neamoth = {
      firstName: "Neamoth",
      lastName: "Ullah",
      isWorking: "",
      fullName: "",
      get fullName(){
         return this.firstName + " " + this.lastName;
      }
   }
   
   neamoth.isWorking = true;
   console.log(neamoth.isWorking); //True
   const mitu = {
      firstName: "Mitu",
      lastName: "Akter",
      isWorking: "",
      fullName: "",
      get fullName(){
         return this.firstName + " " + this.lastName;
      }
   }
   
   mitu.isWorking = true;
   console.log(mitu.fullName+" "+mitu.isWorking); //Mitu akter and true

   // Proper way to do this with class
   class Names{
      constructor(email, password){
         this.email = email;
         this.password = password;
   
      }
      get password(){
         return this._password.toUpperCase();
      }
      set password(newPassword){
         this._password = newPassword;
      }
   }

   const noor = new Names("Noor@gmail.com" , "NoorIsGoodGirl123");
   console.log(noor.password);

   // Protection in object
   console.log("Protection in object");
   
   // non Extensible - Can be done by, preventExtension(), seal(), freeze()
   const protectObject = {
      name: "Neamoth",
      age: 27,
      country: "Bangladesh"
   }
   
   Object.preventExtensions(protectObject);
   try{
      protectObject.age = 28;
      console.log(protectObject.age); // 27
   }catch(e){
      console.log(e);
   }
   
   // Sealed - Can't add or remove property, can't change property, can't delete property
   const sealedObject = {
      name: "Neamoth",
      age: 27,
      country: "Bangladesh"
   }
   
   Object.seal(sealedObject);
   // we already know about the frozen property

   // to check we can use isSeal, isExtensible, isFrozen
   
   //Why we can not change Math.PI?
   const desPI = Object.getOwnPropertyDescriptor(Math, "PI");
   console.log(desPI); // locked with writable: false, enumerable: false, configurable: false
   const isPiSeal = Object.isSealed(Math.PI);
   console.log(isPiSeal); // Yes its Sealed
   const isFrozenPi = Object.isFrozen(Math.PI);
   console.log(isFrozenPi); // Yes its Frozen
   
   // So its basically locked by every protection methods 
}

{
   // Functions in Javascripts
   //Simple declearations:

   function SimpleName(name){
      return console.log(name);  
   }
   SimpleName("Neamoth Ullah");

   // Self invoking function
   (function SelfGreet(){
      return console.log("Hello, Welcome to my github");
   })(); //invoke automatically

   //Hoisting function:
   //call the function:
   hoistingAnimal("Cow");
   //create the function:
   function hoistingAnimal(animal){
      return console.log("Animal: ", animal);
   }

   // arrow function: ES6
   const arrowFunction = (a,b=10) => { // Default Parameter Values :ES6
      return console.log(`Sum is, ${a+b}`);
   }
   arrowFunction(5);
   
}

//new ssh key testing

{  
   //Invoking function
   //window object

   let m = func1();
   function func1(){
      return this;
   }

   console.log(x);

   //use of this in a function:

   const func2 = {
      a : 4,
      b : 5,
      sum(){
         console.log(this.a + this.b);
      }
   }
   func2.sum(); // Output: 9

   //Function call:

   const person = {
      fullName: function(city, country){
         console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
      }
   }
   const person1 = {
      firstName : "Neamoth",
      lastName : "Ullah"
   }
   person.fullName.call(person1, "Dhaka", "Bangladesh");
   /*
   Here we call property in a object from another object.
   this is difference between call and invoking.

   when we invoke a function it call be call
   but call is not same as invoking
   */

   /*
   Apply in function - **apply and call are similar**

   difference between:
   call takes arguments separately but 
   apply takes arguments as an array.
   */

   const list = ["Dhaka", "Bangladesh"];
   const p1 ={
      address(city,country){
         console.log(this.name + " lives in " + city + ", " + country);
      }
   }
   const user1 ={
      name: "Neamoth",
      age: 27
   }

   //p1.address.apply(user1, "Laksham", "Bangladesh"); //TypeError: CreateListFromArrayLike called on non-object
   p1.address.apply(user1, list);    
}


{
   // Class: two ways to define  a class

   //Declearation:

   class Person{
      constructor(name, age, address){
         this.name = name;
         this.age = age;
         this.address = address;
      }

      // using method in clss
      display(){
         console.log(`Name: ${this.name}`);
         console.log(`Age: ${this.age}`);
         console.log(`Address: ${this.address}`);
      }
   }

   //Expression - without name, we can also name the class(ex. class Name)
   const user = class{
      constructor(userName, password){
         this.userName = userName;
         this.password = password;
      }
   }

   // Class has temporal dead zone like let and const: ex.

   //console.log(eNeamoth.name); // Uncaught ReferenceError: Cannot access 'eNeamoth' before initialization
   /*
      Because temporal dead zone Starts from here.
      we will discuss it later
   */  
   class Employee{
      constructor(name, depertment){
         this.name = name;
         this.depertment = depertment;
      }
   }
   const eNeamoth = new Employee("Neamoth", "Software Engineering"); // so the temporal dead zone ends here
   const p1 = new Person("Neamoth", 23, "Dhaka, Bangladesh");
   p1.display();

   // Class inheritance: inherit is basically get DNA from your father

   class Father {
      constructor(firstName, age){
         this.firstName = firstName;
         this.lastName = 'Sardar';
         this.age = age;
      }
      fullName(){
         console.log(`Name: ${this.firstName} ${this.lastName}`);
      }
   }

   class Child extends Father{
      constructor(firstName, lastName, education){
         
         super(lastName);
         console.log(this.lastName);
         this.firstName = firstName;
         this.education = education;
      }
      fullName(){
         console.log(`Name: ${this.firstName} ${this.lastName}`);
         
      }
   }

   const salam = new Father('Abdus Salam', 57);
   const neamoth = new Child('Neamoth', 'CSE');
   neamoth.fullName();
   salam.fullName();


   // Static method: 

   class StaticClass {
      constructor(name){
         this.name = name;
         
      }
      static displayStatic(a){
         console.log('Name: '+ a.name);
         
      }
   }
   const sc = new StaticClass('Neamoth Static');
   //sc.display(); // throw type error because static method can not call with variable
   StaticClass.displayStatic(sc);

}

{
   //JS aysnc:

   /*
      Javascript callback: the concept of callback is
      supose you have a function for operation and
      a function for display. Now you want to control
      the display function with operation function, wether
      you want to display it or not. The job is done by
      callback function.
   */

      //Simple example though is not the real one:

      function display(value){
         console.log(`Hello, ${value}....!`);
      }

      function operation(name, callback){
         if(callback) callback(name);
      }

      operation('Neamoth', display); // So display will be hello, Neamoth....!

      /* 
      Asyn behavior: we know js behave like its execute code line by line
      But its behave async with setTimeout function
      */
     console.log('1');
     setTimeout(function(){
        //console.log('2');
     }, 2000);
     console.log('3');

     // here 2 will print after 2s as time given

     //Async Pattern:

     const keyInsert = true;
     const speed = 100;
     const newSpeed = 80;
     function engineStart(callback){
      console.log("Engine has been started");
      setTimeout(function(){
         if(keyInsert === true){
            callback();
            
         }else{
            console.log("Key insert unsuccessful");            
         }
      }, 2000);
     }

     function carRunning(callback){
      console.log(`Car Running at Speed of, ${speed}mph`);
      setTimeout(function(){
         if(speed >= 100){
            callback();  
         }else{
            console.log("Speed under Limit");            
         }
      }, 2000);
     }

     function slowDown(callback){
      console.log("Car slowing down");
      setTimeout(function(){
         if(newSpeed < 100){
            callback();
         }else{
            console.log("Cops behind.. PULL OVER..!");         
            console.log("Car Stopped and getting speed ticket");         
         }
      });
     }
     function carStop(){
      setTimeout(function(){
         console.log("Riched Home...!");
      }, 2000);
     }

   //   engineStart(function(){
   //      carRunning(function(){
   //          slowDown(function(){
   //              carStop();
   //          });
   //      });
   //   });

     //Promises in js -solving callback hell like the previous example
     
          console.log(`
           
           Solving With Promise
           
           `);
     function carStarts(){
      console.log("Checking for key..");
      const promise = new Promise(function(resolve, reject){
         setTimeout(function(){
            if(keyInsert){
               resolve();
            }else{
               reject("Key is not inserted.");
            }
         }, 2000);
      });
      return promise;
     }

     
     function carRuns(){
      console.log("Engine started, Car is running");
      const promise = new Promise(function (resolve, reject){
         setTimeout(function(){
            if(speed < 100){              
               resolve();
            }else{
               console.log(`Car Stopped for fine`);
               reject(`You are getting ticket for ${speed}mph, Fine is: $200`);
               
            }
         }, 2000);
      });
      
      return promise;
     }
     function carStopped(){
      console.log("Car reached the parking spot");
      
      const promise = new Promise(function(resolve){
         setTimeout(function(){
            resolve("Car is stopped");
         },2000);
      });

      return promise;
     }
   //   carStarts()
   //    .then(carRuns)
   //    .then(carStopped)
   //    .then(function(value){
   //       console.log(value);         
   //    })
   //    .catch(function(error){
   //       console.log(error);         
   //    })
}