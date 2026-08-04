// Arithmetic Operators in JS ------------------------
// +, -, *, /, %, **

// let a = 12+13;   //25

// let b = 12-13;   // -1

// let c = 2*4;   // 8

// let ab = 20/2;  // 10

// let ac = 23%20; // 3

// let ba = 2**5;   // 32

// Comparisin operators in JS -----------------------
// ==, ===, <=, >=, !=, !==, >, < 

// let a = 3;
// let b = "3";

// console.log(a==b);  // True
// console.log(a===b);  // False

// let c = 4;
// let d = 5;
// console.log(c<=d);  // True
// console.log(c>=d);  // False
// console.log(c>d);  // False
// console.log(c<d);  // True


// let ab = 20;
// let ba = "20";
// console.log(ab!=ba);  // False
// console.log(ab!==ba);  // True


// Assignment operator -------------------------------
// =,+=, -=, *=, /=, %=

// let a = 10;
// console.log(a); // 10

// a+=5;  // a = a+5;
// console.log(a); // 15

// a-=3; // a = a-3;
// console.log(a); // 12

// a*=2;  // a = a*2;
// console.log(a);   // 24

// a/=3;   // a = a/3;
// console.log(a); // 8

// a%=5;
// console.log(a); //3


// Logical operator ------------------------
// && (AND) use this when you require all condition should be true,
// ||(OR) use this when you require at least one condition should be true. 

// let a = 10;
// let b = 20;
// let c = 30;

// if(a>b && b<c){    // (10>20(false)&&20<30(True)) ---> //False
//     console.log("Hello"); // This statement Will not print
// }

// if(a<b && b<c){    // (10>20(True)&&20<30(True)) ---> //True
//     console.log("Hello!"); // This statement Will print
// }

// if(a>b || b<c){    // (10>20(false)&&20<30(True)) ---> //True
//     console.log("Hello! OR operator"); // This statement Will print
// }

// if(a>b || b>c){    // (10>20(false)&&20>30(false)) ---> //false
//     console.log("Hello! OR operator"); // This statement Will not print
// }


// unary operators in JS ------------------------------------
// That work on a single operand (one value or variable)
// +, -, ++, --, !, typeof

// let a = "5";
// console.log(+a); // 5
// console.log(typeof a); // Number

// let b = "5";
// console.log(-b); // -5
// console.log(typeof b); // String


// let a = 4;
// let b = a++;
// console.log(a, b); // 5, 4

// let a = 4;
// let b = ++a;
// console.log(a, b); // 5, 5

// let like = 100;

// function printLike(){
//     return ++like;
// }
// console.log(printLike());  // 101
// console.log(like);   //101


// Post-increment --------------
// let ab = 5;
// console.log(ab++); //5
// console.log(ab++); //6
// console.log(ab++); //7
// console.log(ab); //8

// Pre-increment ----------------
// let ab = 5;
// console.log(++ab); //6
// console.log(++ab); //7
// console.log(++ab); //8
// console.log(ab); //8


// Post-decrement --------------
// let ab = 5;
// console.log(ab--); //5
// console.log(ab--); //4
// console.log(ab--); //3
// console.log(ab); //2

// Pre-decrement ----------------
// let ab = 5;
// console.log(--ab); //4
// console.log(--ab); //3
// console.log(--ab); //2
// console.log(ab); //2

// EX -- mix of per and post  ------------
// let ab = 5;
// console.log(ab++); // 5 
// console.log(++ab); // 7
// console.log(ab--); // 7
// console.log(--ab); // 5
// console.log(ab); // 5

// Interview questions ---------------
// let x = 10;
// let y = ( x++, x+1, x*2); // (x=10+1)=11,(11+1)=12,(11*2)=22 Last calculated value will be print
// console.log(y); // 22

// let x = 10;
// let y = (x++, x+1, x*2, ++x); // Last value will be calculated
// console.log(y); // 12


// Ternary operators ----------------
// ?: (we can use it as if else short hand method)

// let a = 20;
// let b = 23;
// Syntax ---> condition ? True case : false case 
// a>b? console.log("Hello") : console.log("Bey!");  //

// let score = 98;
// let grade = score>=90 ? "A" : score>=80 ? "B" : score>=70 ? "C" : score>=50 ? "Pass" : "Fail";
// console.log(grade);

// let point = 80;
// let level = point>=100 ? "Gold" : point>=50 ? "Silver" : "Bronze";
// console.log(level);

// let isLogIn = true;
// let hasToken = false;
// let access = isLogIn && hasToken ? "Access grant" : "Access deny"
// console.log(access);


// Instanceof is use to check the non-primitive variable --------------------------------

//Ex ---> 1
// let a = [1,3,34,43];  // This is how we initalize array in JS
// console.log(typeof a); // It will print object but in actual it is array
// console.log(a instanceof Array); // It will print true becasue a is initialize as an array.

//EX ---> 2
// let b = {
//     name: "Sam",
//     age: 23,
// };   // This is how we initalize Object in JS

// console.log(typeof b);  // It will print object but in actual it is also object
// console.log(b instanceof Object); // It will print true becasue b is initialize as an Object.

//EX ---> 3

// printMsg();
// console.log(typeof printMsg);
// console.log(printMsg instanceof Function);

// function printMsg(){
//     console.log("Hey! Sam");
// }







