const count = (function (){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
})();

// const reverseCount = (function (){
//     let counter = count();
//     console.dir(count);
    
//     console.log(counter);
    
//     return function(){ counter--; return counter;}
// })();

// count(); //1
// count();//2
// reverseCount();//1
// count();//2
// count();//3

// console.log(reverseCount());

count();//1
count();//2
count();//3

console.dir(count); // clouser 3
