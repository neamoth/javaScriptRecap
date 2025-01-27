{
    // Fat arrow function:

    // Old way:
    function add (a,b){
        return a+b;
    }

    console.log(add(2,3));
    //es6

    // For single line

    let number = (n) => n; // for return we dont need to write it
    let number2 = (n) => console.log(n);
    
    console.log(number(2));
    number2(4);
    

    // Use of this in arrow functions

    let search = document.querySelector('.search');
    let display = document.querySelector('.display');
    let greeting = document.querySelector('.greeting');

    function print(){
        display.innerHTML = this.value;
        setTimeout(() => greeting.innerHTML = `Thank you ${this.value}`, 1000);
    }

    search.addEventListener('keyup', print);    // But this will not work on here

    // Arrow functions dont change or care about this so that's why if  I want to use this we can do it with arrow functions
    
}

{

    //Truty and falsy value in ES6+

    /*
    Note: So we need to know what is truthy and falsy values are
    Truthy values: true, 1, "hello", {}, [], new Date(), function(){}
    Falsy values: false, 0, "", null, undefined, NaN
    */

    let check = "";

    if(check){
        console.log("Truthy value");
    }
    else{
        console.log("Falsy value");
    }
}

{
    //Ternary operators:

    //Traditional way: Must use for nested
    let age = 1;

    if (age >= 18){
        console.log("You are adult");
    }else{
        console.log("You are not adult");
    }

    // ES6 way: Best for single line or 2 line of nested structure
    
    let ageStatus = (age >= 18) ? "Adult" : (age <= 12) ?"Child" :
     "Not adult";
    ;
    console.log(ageStatus);

    let isLoggedin = true;
    let logout = !isLoggedin;
    console.log(logout);
}