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
// let newArr = arr.slice(0,3);
// console.log(newArr);

// Reverse method:- (It just reverse the array)
// let arr = [1,2,3,45,4,5,6];
// arr.reverse();
// console.log(arr);

// Sort method:- (It just help to sort the array);

// let arr = [23, 45, 5.65, 7, 7, 8, "sjdlk", .5453,];
// let sortArray = arr.sort(function(a,b){
//     return a - b;  // (a-b) for assending order and (b-a) for decending order.
// });
// console.log(sortArray);


//forEach method:-
// let arr = [44,45,84,36,21]
// arr.forEach(function(val){
//     console.log(val);
// })


// Map Method:- (It is use to create a new array using existing array)
// let arr = [44,45,84,36,21]
// let newArr = arr.map(function(val){
//     if (val>40) return 12;
//     else return 10;
// })

// console.log(newArr);


// filter Method:- 
// let arr = [44,45,84,66,21];
// let newArr = arr.filter(function(val){
//     if(val>50) return true;
// })
// console.log(newArr);


// Reduce Method:-
// let arr = [44,45,84,66,21];
// let newArr = arr.reduce(function(accum,val){
//     return accum + val;
// },0)
// console.log(newArr);


// Find method:-
// let arr = [44,45,84,66,21];
// let newArr = arr.findIndex(function(val){
//     if (val === 66)
//     return val;
// })
// console.log(newArr);



