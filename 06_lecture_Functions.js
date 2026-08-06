//Ways to decelare Function -------------------

//Function statement ----------------------
// function abc() {
//     //Function statement
// }

//Function experssion --------------------
// let ab = function () {
//     //Function experssion
// }

//Fat arrow function --------------------
// let cd = () => {
//     //Fat arrow function
// }

// Parameterized function ----------------
// function dance(ab){
//     console.log(`${ab} is dancing`);
// }
// dance("Cat");

// default function --------------------
// If user forgot to pass arguments in a funtion 
// So we can assing a default value in a function like we did v1 = 0, v2 = 0.
// If we did not assing default value in a function it will print (undefine, undefine)
// function abc(v1 = 0,v2 = 0){  
//     console.log(v1, v2);  // Now it will print 0,0
// }
// abc();


// Rest ... function -------------------- 
// Rest ... is way to accept all the value array vai fuction.
// If user pass more arguments at the time of function calling which was not accepted 
// -by the function. this helps to restore values in array.

// function abc(v1 = 0,v2 = 0, ...arr){  
//     console.log(v1, v2, arr);  // Now it will print 0,0
// }
// abc(1,2,2,3,4,4,4,5,66,6,6,43,2,1);

// Return function ----------------------
// A function that return something when we call them.
// function abc(){
//     return 5;
// }
// let val = abc();
// console.log(val);

// First class function (Assign to variables, Pass as argument, retun from other function). -------------------------------------
//Assign function to variables:-
// let val = function(){
//     console.log("Print Hello!");
// }
// val();


//Passing function as argument:-
// function abc(Msg){
//     Msg();
// }

// abc(function(){
//     console.log("Hello");
// })


// Retun from other function:-
//A function that return other function.

// function abc(){
//     console.log("Hey!");
//     return egf();
// }

// let anotherFun = abc();
// console.log(anotherFun);


// function egf(){
//     console.log("I am return function");
//     return 56;
// }


// HOF (higher order function) is a function that a take a function as a parameter or return a fuction; ---------------------------------------------------

// This function is taking function parameter:-
// function abc(val){
//     val();
// }

// abc(function(){
//     console.log("hello");
// });

// This function returning a function:-
// function abc(){
//     return function vbn(){
//         console.log("Hello!");
//     }
// }

// let a = abc();
// a();


// Pure and imPure function ---------------------------------

// Pure function are those functions that can not change the out side values:-
// let a = 5;
// function abc(){
//     console.log("hey");
// }
// abc();

// imPure function are those functions that can change the out side values from inside the function:-

// let a = 5;
// function abc(){
//     console.log("hola");
//     a++;    
// }
// abc();
// console.log(a); // 6 (updated from inside the function).


// Closures and lexical scoping JS -------------------------------
// A parent function that returns another function but use parent function variable is called closures in js:-

// function abc(){
//     let a = 10;
//     console.log(a);
//     return function(){
//         a = a + 2;
//         console.log(a);
//     }
// }

// // abc()();   // we can write ()() with function name to call both function at a time.

// let ab = abc();  // To call only parent function.
// ab();  // To call return function.


// lexical scoping:-
// We can use the parent function variables in the its chid functions this called as lexical scoping.

// function abc(){
//     let a = 10;

//     function def(){
//         let b = 20;
//         ghi();
//         function ghi(){
//             let c = 30;
//             let sum = a + c;
//             console.log(sum); // this will print 40. note:- we can use the parent function variables inside the child function. 
//         }
//     }
//     def();
//     let prod = a * c; // this will give error because we can not use child function variable in side parent funtion this is called lexical scoping.
// }

// abc();



// IIFE (immediately invoked function expression) -------------------------------------
// It is a function that call immediately itself are called IIFE.
// (function(){
//     console.log("Hello");
// })();

// Hoisting of a function ------------------
// function declaration/statement can be host but function expression can not be host.
// abc();     // It will print hello

// function abc(){
//     console.log("hello");
// }

// function experssion can not be hoist ------------------

// abc(); // It will give error -- cannot access 'abc' before initialization

// let abc = function (){
//     console.log("Hello");
// }

// Q1. Create a arrow function.
// let abc = (a,b) => {
//    console.log("Hello");
// }

//Q2. User rest perameter to accept any number of the score and return total score.

// function abc(...score){
//     let toatScore = 0;
//     for(let i = 0; i<score.length; i++){
//         toatScore += score[i];
//     }
//     return toatScore;
// }

// let sum = abc(12,23,34,55,23)
// console.log(sum);

//Q3. Create a IIFE function

// (function(){
//     console.log("hey!");
    
// })();

