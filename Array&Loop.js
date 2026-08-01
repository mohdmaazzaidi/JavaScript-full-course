
// let num = [13,42,34,2,1,23];
// let num2 = {
//     name : 'Maaz',
//     age : 23,
// };
// console.log(num);
// console.log(typeof num);        // It will check the type of variable
// console.log(num[2]);
// console.log(Array.isArray(num));    // It will check given variable is array or not
// console.log(Array.isArray(num2));    // It will check given variable is array or not
// console.log(num.length);

// let arr = [23,34,45];
// console.log(arr);
// arr.push(345);    // It will add element in the end of array
// console.log(arr);
// arr.pop();    // It will remove the last element from the array
// console.log(arr);


//shif or unshift
// let arr =[12,3,434,33,3,34,2.2];
// arr.shift()         // It will remove element in the start of array
// console.log(arr);


// let arr =[12,3,434,33,3,34,2.2];
// arr.unshift(56)          // It will add element in the start of array
// console.log(arr);


//Get the end value of Array
// let brr = [23,45, 644,'aead',true,45];
// let abc = brr.pop();
// console.log(brr)
// console.log(abc)


// Spilice remove method
// let arr =[12,3,434,33,3,34,2.2];
// arr.splice(2,4);  // It will delete the 4 element from index 2
// console.log(arr);


// Spilice Add method
// let arr =[12,3,434,33,3,34,2.2];
// arr.splice(2,0,23,34,233);  // It will Add the 2 element from index 2
// console.log(arr);


//toString Method
// let arr =[12,3,434,33,3,34,2.2];
// console.log(arr.toString());  //It will convert the Array in the form of string


// Sort method
// let arr =[12,3,434,33,3,34,2.2];
// arr.sort()
// console.log(arr);

// valueOf method
// let arr =[12,3,434,33,3,34,2.2];
// console.log(arr.valueOf());   //It will print the same value


//using array by references
// let arr =[12,3,434,33,3,34,2.2];
// console.log(arr);
// let arr2 = arr;
// arr2[0] = 24;   //It will remove the old value of 0 index and add new value
// console.log(arr);

//de-structuring of an array
// let arr =[12,3,4,6,50];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d,e);



// SUM OF THE ARRAY
// let arr =[12,3,4,6,50]; 
// let sum = 0;
// for(let i = 0; i< arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);

//CONVERT GIVEN ARRAY IN SQUARE ARRAY
// let arr =[12,3,4,6,50]; 
// let square = [];
// for(let i = 0; i< arr.length; i++){
//     square.push(arr[i]*arr[i]);
// }
// console.log(square);


// let arr =[12,3,4,6,50]; 
// for(let i = 1; i<=25; i++){
//     if(i%2 == 0){
//        continue;
//     } else{
//         console.log(i);  
//     }
// }

// ADD 4 IN THE START AND 7 IN THE END OF AN ARRAY
// let arr =[5,6]; 
// arr.unshift(4);
// console.log(arr); 
// arr.push(7);
// console.log(arr); 

// function position(arr, position){
//     return arr[position];
// }

// let arr =[12,3,4,6,50]; 
// console.log(position(arr,arr.length-1));


// CREATE A COPY OF AN ARRAY USING SLICE METHOD
// function copyArray(arr){
//     return arr.slice(0, arr.length);
// }
// let arr =[12,3,4,6,50]; 
// arr2 = copyArray(arr);
// arr2[1] = null;
// console.log(arr2);
// console.log(arr);


// function isPrime(num) {
//     let i = 2;
//     while (i < num) {
//         if (num % i === 0) {
//             // console.log('Not Prime');
//             return false;
//         }
//         i++;
//     }
//     return true;
// }

// let num = 45;
// let numCount = 0;
// while (numCount < 5) {
//     if (isPrime(num)) {
//         console.log(num);
//         numCount++;
//     }
//     num++;
// }


// for(let i = 10; i>=1; i--){
//     console.log(i);
// }




// let num = 25;
// let i = 2;
// let count = 0;
// while(num%i == 0){
//     console.log(i);
//     count++;
//     if(count == 50){
//         break;
//     }
//     i++;
// }


// let arr =[12,-3,4,6,-50,54,-98,23,34]; 
// let updatedArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] < 0){
//         continue;
//     }else{
//         updatedArr.push(arr[i]);
//     }
// }
// console.log(updatedArr);


let arr = ['KG', 'Coding', 'Javascript', 'Course', 'is', 'okay'];
let result = '';
for (let i = 0; i < arr.length; i++) {
    result = result + arr[i] + ' ';
}
console.log(result);