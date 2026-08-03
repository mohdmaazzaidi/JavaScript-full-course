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

let x = 10;
let y = (x++, x+1, x*2, ++x); // Last value will be calculated
console.log(y); // 12




