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

// First calls function (Assign to variables, Pass as argument, retun from other function). -------------------------------------
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


// Closures in JS
// A function that returns 
