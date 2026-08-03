//CONVERTING STRING INTO NUMBER
// let a = "23";
// let ab = Number(a);
// console.log(typeof ab); 
// console.log(ab);


//CONVERTING NUMBER INTO STRING
// let a = 233;
// let ab = String(a);
// console.log(typeof ab);
// console.log(ab);


//CONVERTING NUMBER INTO BOOLEAN
// let a = "bfcgh";
// let ab = Boolean(a);
// console.log(typeof ab); 
// console.log(ab);

// let a = "2"+(1+5);
// console.log(a);

// let b = 3 + 6 + "23";
// console.log(b);



// Premitive data types

let num = 123;
let str = "Maaz";
let bool = true;
let temp = null;
let undefineNum;
let bigNum = 34533221113322334432435n;
let id = Symbol(123);

// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof temp);
// console.log(typeof undefineNum);
// console.log(typeof bigNum);
// console.log(typeof id);


// Non-Premitive data types are (Arrar,function,objects)

let arr = [1,2,3,3,4.4];

let obj = {
    Name: 'Maaz',
    age: 23,
};

let printMsg = function (a){
    if(a == 0){
        var b = 10;
    }
    console.log("Hello world");
    console.log(b);
    return b;
}

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof printMsg);
// console.log(printMsg(0));
// console.log(typeof NaN);

if(""){
   console.log("Hello! Maaz");
}

let a;
console.log(a);  // Undefine 

let b = null;
console.log(b);  // null

let c = 'Name' * 3;
console.log(c);  //NaN


let ab = '5'+ 1;
console.log(ab);  //51

let cd = '5'- 1;
console.log(cd);  //4


