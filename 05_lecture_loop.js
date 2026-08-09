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
//     if(index%2 == 1){
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


// Find the Sum of Digits

// let num = 4567;
// let sum = 0;
// while(num>0){
//     let digit = num%10;
//     sum = sum + digit;
//     num = Math.floor(num/10);
// }
// console.log(sum);


// Reverse a Number
// let num = 344543;
// let newnum = 0;

// while(num>0){
//     let digit = num%10;
//     newnum = newnum*10 + digit;
//     num = Math.floor(num/10);
// }
// console.log(newnum);

// Check Palindrome Number
// let num = 2002;
// let originalNum = num;
// let newNum = 0;
// while(num>0){
//     let digit = num%10;
//     newNum = newNum * 10 + digit;
//     num = Math.floor(num/10);
// }
// console.log(newNum);

// if(originalNum == newNum){
//     console.log("Palandrome");
// } else {
//     console.log("Not Palandrome");
// }



// Find the Largest Digit in a Number
// let n = 23439384;
// let largestDigit = 0;

// while(n>0){
//     let digit = n%10;
//     if(digit>largestDigit){
//         largestDigit = digit;
//     }
//     n = Math.floor(n/10);
// }

// console.log(largestDigit);


//Count Even and Odd Digits in a number

// let n = 23456743223;
// let evenCount = 0;
// let oddCount = 0;
// while(n>0){
//     let digit = n % 10;
//     if(digit %2 == 0){
//         evenCount++
//     } else {
//         oddCount++
//     }
//     n = Math.floor(n/10);
// }

// console.log(evenCount);
// console.log(oddCount);


// Find the GCD (HCF) of Two Numbers
// let a = 12;
// let b = 18;

// let gcd = 1;
// let smaller;
// if (a < b) {
//     smaller = a;
// } else {
//     smaller = b;
// }

// for (let i = 1; i <= smaller; i++) {
//     if ((a % i === 0) && (b % i === 0)) {
//         gcd = i;
//     }
// }

// console.log(gcd);


// Find the LCM of Two Numbers
// let a = 133;
// let b = 181;
// let largNum;
// if(a<b){
//     largNum = b;
// } else {
//     largNum = a;
// }

// let lcm = largNum;
// while(true){
//     if(lcm%a === 0 && lcm%b ===0){
//         break;
//     }
//     lcm++
// }

// console.log(lcm);

// Find GCD of 34 and 42
// let a = 34;
// let b = 42;
// let gcd = 1;
// let smaller;
// if(a<b){
//     smaller=a;
// } else{
//     smaller = b;
// }

// for(let i = 1; i<=smaller; i++){
//     if(a%i == 0 && b%i == 0){
//         gcd = i;
//     }
// }

// console.log(gcd);


// Check if a Number is Prime
// let num = 5;
// let isPrime = true;
// for(let i = 2; i*i<num; i++){
//     if(num%i == 0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime === true){
//     console.log("Prime Number");
// } else{
//     console.log("Not a Prime Number");
// }


// LCM of two numbers?
// let a = 34;
// let b = 23;
// let largestDigit;
// if (a < b) {
//     largestDigit = b;
// } else {
//     largestDigit = a;
// }

// let lcm = largestDigit;
// while(true){
//     if(lcm%a === 0 && lcm%b === 0){
//         break;
//     }
//     lcm++;
// }
// console.log(lcm);


// GCD of of 8 and 20 ?
// let a = 8;
// let b = 20;
// let smaller;
// if(a<b){
//     smaller = a;
// } else {
//     smaller = b;
// }

// let gcd =  1;

// for(let i = 1; i<= smaller; i++){
//     if(a%i === 0 && b%i ===0 ){
//         gcd = i;
//     }
// }
// console.log(gcd);


// LCM of two numbers 8 and 20 ?
// let a = 8;
// let b = 20;

// let largestDigit;
// if(a<b){
//     largestDigit = b;
// } else{
//     largestDigit = a;
// }

// let lcm = largestDigit;

// while(true){
//     if(lcm%a ===0 && lcm%b === 0){
//         break;
//     }
//     lcm++;
// }
// console.log(lcm);


// HCF(GCD) of 15 and 35 = 5
// let a = 15;
// let b = 35;
// let smaller;
// if(a<b){
//     smaller = a;
// } else{
//     smaller = b;
// }

// let gcd = 1;

// for(let i = 1; i<= smaller; i++){
//     if(a%i === 0 && b%i === 0){
//         gcd = i;
//     }
// }
// console.log(gcd);

// LCM of 15 and 35 

// let a = 15;
// let b = 35;
// let largestDigit;
// if(a<b){
//     largestDigit = a;
// } else{
//     largestDigit = b;
// }

// let lcm = largestDigit;
// while(true){
//     if(lcm%a === 0 && lcm%b === 0){
//         break;
//     }
//     lcm++;
// }
// console.log(lcm);

// Print All Prime Numbers from 1 to N
// let n = 34;
// if(n>=2){
//     for(let i = 1; i<=n; i++){
//         let isprime = true;
//         for(let j = 2; j<i; j++){
//             if(i%j === 0){
//                 isprime = false;
//                 break;
//             }
//         }
//         if(isprime == true){
//             console.log(i);
//         }
//     }
// }else{
//     console.log("Invalid input");

// }