// const student = {
//     Name: "Mohd Maaz", 
//     age: 22,
//     cgpa: 8.2,
//     isPass: true,
// };

// student.age = student.age +1;   // This is how we can update key value in conts object
// console.log(student.age);

// student["age"] = student["age"]+1;   // This is how we can update key value in conts object
// console.log(student["age"]);

// const profile = {
// User: "@ShradhaKhapra",
// post: 195,
// followers: 569000,
// following: 4,
// isFollow: true,
// };

// profile.User ="Maaz"  // This is how we can update key value in conts object
// console.log(profile);



// ARITHMETIC OPERATORS 

// let a = 5;
// let b = 2;

// console.log("a + b =",a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a % b =",a%b);
// console.log("a ** b =",a**b); // Exponentiation operators this mean 5^2 = 25


// UNARY OPERATORES

// let a = 5;

// console.log("a =",a,); // a = 5
// console.log("a =",++a); // pre increment a = 6
// console.log("a =",a++); // a = a+1; post increment a = 6
// console.log(a); // a = 7


// console.log("a =",--a); // pre decrement a = 6
// console.log("a =",a--); // a = a+1; post decrement a = 6
// console.log(a);  // a = 5


//  ASSIGNMENT OPERATORS

// let a = 10;

// a += 5; // a = a = a + 5
// console.log(a); // a = 15

// a -= 5; // a = a = a - 5
// console.log(a); // a = 5

// a *= 5; // a = a = a * 5
// console.log(a); // a = 50

// a /= 5; // a = a = a / 5
// console.log(a); // a = 2


//  COMPARISON OPERATORS

//  let a = 5;
//  let b = 2;

//  console.log(" a == b ", a == 5); //true
//  console.log(" a == b ", a == b); //false 

//  console.log(" a != b ", a != b); // true
//  console.log(" a != b ", a != 5); // false


// LOGICAL OPERATORS 

//  let a = 7;
//  let b = 5;

//  console.log(" a == b && a > 4 ", a >= b && a >= 6); // True
//  console.log("a != 7", !(a!=b))


// TERNARRY OPERATORS

// let age = 2;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// let num = prompt("Enter number");
// if(num % 5 === 0){
//     console.log("This number is multiple of 5")
// } else{
//     console.log("This number is not a multiple of 5")
// }

// let num = prompt("entere number")

// let ab = 0;
// for(i = 1; i <= num; i++){
// ab = ab + i;
// }

// console.log(ab); 


// let a = prompt("enter no.");

// let i = 1;
// while (i <= a) {
//     console.log(i);
//     i++;
// }


// FOR-OF LOOP

// let str = "Mohd Maaz Zaidi";

// for(let a of str){
//     console.log("a =",a);
// }


// let str = "MohdMaazZaidi";
// let size = 0;

// for(let a of str){
//     console.log("a =",a);
//     size++;
// }
// console.log( "size of str is : ", size);

// FOR-IN LOOP

// let student = {
// name : "Maaz",
// age : 22,
// gender : "M",
// };

// for(let a in student){
//     console.log("key =",a, "value =", student[a]);
// }


// for (let i = 1; i <= 100; i++){
//     if (i%2 == 0){
//        console.log(i);
//     }
// }


// let gameNum = 25;

// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//     userNum = prompt("You have enterd the wrong number. Try again")
// }

// console.log("Congratulation, you have entered the right number")


let gameNum = 25;

let userNum = prompt("Guess the game number");

do {
    userNum = prompt("You have enterd the wrong number. Try again")
} while (userNum != gameNum);
console.log("Congratulation, you have entered the right number")