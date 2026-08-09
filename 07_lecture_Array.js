// Array declarationb --------------------
// let ab = [];

// Array initialization ------------------
// let marks = [12,34,56,78,98,89];

// Accessing array ---------------------
// console.log(marks[3]); //78

// Modifying Array ----------
//  marks[2] = 76;
//  console.log(marks);

// Method in Array ----------------------------------

//Push method:- (It adds the value from the end of the array)
//  let arr = [1,2,3,4,5,6,7,8];
//  arr.push(5000);   // [1,2,3,4,5,6,7,8,5000]
//  console.log(arr);

//Pop method:- (It remove the value from the end of the array)
// let arr = [1,2,3,4,5,6,7,8];
// arr.pop();   // [1,2,3,4,5,6,7]
// console.log(arr);

//Shift method:- (It remove the value from the start of the array)
// let arr = [1,2,3,4,5,6,7,8];
// arr.shift(); // [2,3,4,5,6,7,8]
// console.log(arr);

//UnShift method:- (It adds the value from the start of the array)
// let arr = [1,2,3,4,5,6,7,8];
// arr.unshift(0); // [0,1,2,3,4,5,6,7,8]
// console.log(arr);

//Splice method:- (it remove the value from the middel of the array)
// let arr = [1,2,3,4,5,6,7,8];
// arr.splice(2,3); // [1,2,6,7,8] (it will start removing values from index 2 and remove 3 values) (so the 3,4,5 will be removed).
// console.log(arr);

// Slice method :- (slice() is an array method that returns a copy of a selected portion of an array without changing the original array. It takes two indexes start and end index value (end index is excluded) ).
// let arr = [1,2,3,4,5,6,7,8];
// let newArr = arr.slice(2,4);
// console.log(newArr);

// Reverse method:- (It just reverse the array)
// let arr = [1,2,3,45,4,5,6];
// arr.reverse();
// console.log(arr);

// Sort method:- (It just help to sort the array);
// let arr = [23, 45, 5.65,78,-1,-53];
// arr.sort(function(a,b){
//     return a - b;  // (a-b) for assending order and (b-a) for decending order.
// });
// console.log(arr);


//forEach method:- (Go through every element and perform this action.)
// let arr = [44,45,84,36,21]
// arr.forEach(function(val){
//     console.log(val+2);
// })
// console.log(arr);


// Map Method:- (It is use to create a same size new array using existing array)
// let arr = [44,45,84,36,21]
// let newArr = arr.map(function(val){
//     if (val>40) return 12;
// })
// console.log(newArr);
// console.log(arr);


// filter Method:- (It is used to create a new array on the basis of some conditon and accept only those values which satisfied the condition).
// let arr = [44,45,84,66,21];
// let newArr = arr.filter(function(val){
//     if(val>50) return true; //(It will take only those vaues in new array which are greater than 50.)
// })
// console.log(newArr);
// console.log(arr);


// Reduce Method:- (reduce() is an array method used when you want to combine all elements of an array into one final value.)
// let arr = [44,45,84,66,21];
// let newArr = arr.reduce(function(accum,val){
//     return accum + val;
// },0)
// console.log(newArr);


// Find method:- (find() is used when you want to find the first element that satisfies a condition.)
// let arr = [44,45,84,66,21];
// let newArr = arr.findIndex(function(val){
//     if (val === 66)
//     return val;
// })
// console.log(newArr);

// Some method:-
// let arr = [44,45,84,66,21];
// let newArr = arr.some(function(val){
//     if(val>80){
//         console.log(val);
//         return val;
//     }
// });
// console.log(newArr);


// Every Method:- (It used to check if the entire array element satisfied the condition or not)
// let arr = [44,45,84,663,21];
// let newArr = arr.every(function(val){
//     if(val<100)
//     return val;
// });
// console.log(newArr);


// Destructuring of Array:-
// let arr = [44,45,84,66,21];
// let [ab,bc,,,gf] = arr;
// console.log(typeof(ab,bc,gf));


//Spread operator:- (It is use make copy of existing array)
// let arr = [44,45,84,66,21];
// let arr2 = [...arr];
// console.log(arr2);
// arr2.splice(1,3);
// console.log(arr2);
// console.log(arr);

// Practice set -----------------------------

//Q1. create an array with 3 fruits and print the second fruit.

// let arr = ["apple","Mango","grapes"];
// console.log(arr[1]);


//Q2. Add "Mango" at the end and "Pineapple" at the start of this array:- ["apple","Mango","grapes"]

// let arr = ["Apple","Mango","Grapes"];

// arr.push("Mango");
// arr.unshift("Pineapple");

// console.log(arr);


//Q3. Replace "Banana" with "Kiwi" in the given array.["Apple","Mango","Banana","Grapes"];

// let arr = ["Apple","Mango","Banana","Grapes"];

// arr[2] = "Kiwi";

// console.log(arr);

//Q4. Remove the last item from this array using a method arr = [1,2,3,4,5];

// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);

//Q5. Insert "red" and "blue" at index 1 in this array:- 
// let color = ["Green","Yellow"];

// color.splice(1,0,"Red","Blue")
// console.log(color);

//Q6. Extract only the middle 3 element from this aaray
// let item = [1,2,3,34,4,5,5];
// let newItem = item.slice(2,5);
// console.log(newItem);


//Q7. Sort this array alphabetically and then reverse it:-
// let names = ["Mohd","Maaz","Jhon","Sam", "Zara"];
// names.sort();
// names.reverse();
// console.log(names);

//Q9. Use .map() to square each number:-

// let arr = [1,2,3,4,5];
// let squareArr = arr.map(function(val){
//     return val * val;
// })

// console.log(squareArr);
// console.log(arr);


//Q10. Use filter() to keep number greater than 10:-

// let arr = [14,5,54,32,8,45];
// let newArr = arr.filter((val)=>{
//     return val>10;
// })
// console.log(newArr);


//Q11. use Reduce() to find the sum of the array:-
// let arr = [1,2,3,4,5];
// let newArr = arr.reduce(function(accum,val){
//     return accum + val
// },0)

// console.log(newArr);

//Q12. Use Find() to get the first number less than 10:-
// let arr = [14,5,54,32,8,45];
// let newArr = arr.find(function(val){
//     return val<10;
// })
// console.log(newArr);

//Q13. Use Some() to check if any student has scored below 35:-
// let arr = [14,5,54,32,8,45];
// let failed = arr.some(function(val){
//     return val<35;
// })

// console.log(failed);

// Q14. Use .every() to check if all numbers are even:-

// let arr = [14,52,54,32,8,452];
// let isEven = arr.every(function(val){
//     return val%2 == 0;
// })

// console.log(isEven);

//Q15. Destructuring of array to get the firstName and lastName:-

// let name = ["Maaz","Zaidi"];
// let [firstName,lastName] = name;
// console.log(firstName);
// console.log(lastName);

//Q16. Merge two array using spread operator:-

// let a = [1,2];
// let b = [3,4];

// let newArr = [...a,...b];
// console.log(newArr);

//Q17. Add "India" to the start of this array using spread.
// let arr = ["UK","US"];
// let newArr = ["India",...arr];
// console.log(newArr);

//Q18. clone this Array properly (not by references):
let arr = [1,2,23,3];
let arr2 = [...arr]
console.log(arr2);



