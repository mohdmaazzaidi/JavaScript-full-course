// For Loop ------------------------
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }


// While Loop -----------------------------
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }


// Do while Loop -------------------------
// let i = 14;
// do{
//     console.log(i);
//     i++;
// } while(i<=10);


// Break key word -------------------------
// for(let i = 1; i <= 10; i++){
//     console.log(i);
//     if(i===5){
//         break;
//     }
// }


// Continue key worl
// for(let i = 1; i <= 10; i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }


//Practice questions ---------------------------

// 1. print the number from 1 to 10.
// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }


// 2. print the number from 10 to 1.
// for (let index = 10; index >= 1; index--) {
//     console.log(index);
// }

// 3. print all the even number from 1 to 20.
// for (let index = 1; index <= 20; index++) {
//     if(index%2 == 0){
//         console.log(index);
//     }
// }

// 4. print all the odd number from 1 to 20.
// for (let index = 1; index <= 20; index++) {
//     if(index%2 !== 0){
//         console.log(index);
//     }
// }

// 5. print the tabel of 5.
// for(let i = 1; i<=10; i++){
//     console.log(i*5);
// }

// 6. Find sum of the number from 1 to 100?
// let sum = 0
// for(let i = 1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 7. Print all the number from 1 to 50 that are divisible by 3.
// for(let i = 1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }


// 8. Ask the number from the user and print wether a number is ever or odd from 1 to entered num.
// let num = 21;
// for(let i = 1; i<=num; i++){
//     if(i%2 == 0){
//         console.log(`${i} is even number`);
//     } else {
//         console.log(`${i} is odd number`);
//     }
// }

// 9. How many number from 1 to 100 are divisible by both 3 and 5?
// for(let i = 1; i<=100; i++){
//     if((i%3 == 0) && (i%5 == 0)){
//         console.log(i);
//     }
// }

// 10. Write a for loop from 1 to 100 and print 5 odd number only and stop the loop.
// let count = 0;
// for(let i = 1; i<=100; i++){
//     if( count < 5){
//         if(i%2 === 1){
//         console.log(i);
//         count++
//     }
//     }
// }


// 11. Print all the prime number from 1 to 50.
// for(let i = 1; i<=50; i++){
//     let isPrime = true;
//     for(let j = 2; j<i; j++){
//         if(i%j == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime === true){
//         console.log(i);
//     }
// }

// 12. Sum of all the even no. from 1 to 50.
// let sum = 0;
// for(let i = 2; i<=50; i+=2){
//         sum += i;
// }
// console.log(sum);

// 13. Sum of all the odd no. from 1 to 50.
// let sum = 0;
// for(let i = 1; i<=50; i+=2){
//         sum += i;
// }
// console.log(sum);