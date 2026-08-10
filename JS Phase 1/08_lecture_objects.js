// let obj = {
//     name: "Maaz",
//     course: "B.tech",
//     age: 22,
// };
// let ab = "age";
// console.log(obj[ab]);
// console.log(obj["name"]);
// console.log(obj["course"]);


// Nesting and Deep object:-
// let ab = {
//     name : "Maaz",
//     age : 22,
//     education: {
//         course : "B.Tech",
//         pass_year : 2026, 
//         other_education : {
//             university : "bhabha",
//         }
//     }
// }
// console.log(ab.education.other_education.university);

// Destructuring of object:-
// let ab = {
//     name : "Maaz",
//     age : 22,
//     education: {
//         course : "B.Tech",
//         pass_year : 2026, 
//         other_education : {
//             university : "bhabha",
//         }
//     }
// }
// let {university} = ab.education.other_education;
// console.log(university);

// for-in loop on object:- (It use to check the all keys and values in the object)

// let ab = {
//     name: "Maaz",
//     age: 22,
//     course: "B.Tech",
//     pass_year: 2026,
// }

// for (let efg in ab) {
//     console.log(efg,":", ab[efg]);
// }

// Object.keys :---  (It helps us to creat a array of object keys)
// let ab = {
//     name: "Maaz",
//     age: 22,
//     course: "B.Tech",
//     pass_year: 2026,
// }
// console.log(Object.keys(ab));

// Object.entries :- (It helps us to create  )
// let ab = {
//     name: "Maaz",
//     age: 22,
//     course: "B.Tech",
//     pass_year: 2026,
// }
// console.log(Object.entries(ab));

// Copy a object using Spread:-
// let ab = {
//     name: "Maaz",
//     age: 22,
//     course: "B.Tech",
//     pass_year: 2026,
// }
// let newAb = {...ab};
// newAb.name = "jhon";
// console.log(newAb);
// console.log(ab);

// Copy a object using Assing:- (Note:- Assing and Spread do the same work)
// let ab = {
//     name: "Maaz",
//     age: 22,
//     course: "B.Tech",
//     pass_year: 2026,
// }
// let newAb = Object.assign({},ab);
// newAb.name = "jhon";
// console.log(newAb);
// console.log(ab);

// Deep Clone of Object:- (First we convert object into string later into original form to copy entire object)
// let ab = {
//     name: "Maaz",
//     age: 22,
//     info: {
//         course: "B.Tech",
//         pass_year: 2026,
//     }
// }

// let newAb = JSON.parse(JSON.stringify(ab))
// newAb.info.course = "MCA"
// console.log(newAb);
// console.log(ab); 

// Optional chaining:-
// let ab = {
//     name: "Maaz",
//     age: 22,
//     info: {
//         course: "B.Tech",
//         pass_year: 2026,
//     }
// }

// console.log(ab?.info?.course);  // (It say that the key may be available or not but do not give error, give undefine)

//Compute properties:-
// let role = "Admin";
// let ab = {
//     name: "Maaz",
//     age: 22,
//     info: {
//         course: "B.Tech",
//         pass_year: 2026,
//     },
//     [role]: "Maaz",
// }
// console.log(ab[role]);
// console.log(ab);


// Practice -------------------------

// Q1. create an object for a student with name age and isEnrolled.

// let student = {
//     name: "maaz",
//     age: 22,
//     isEnrolled: true,
// }

//Q2. Access the value of "first-name" from object.

// let user = {
//     "first-name": "Maaz",
// };

// console.log(user["first-name"]);

//Q3. Given a dynamic key let key = "age", how will you access user[key]?

// let user = {
//     "first-name": "Maaz",
//     age: 22,
// };

// let key = "age";

// console.log(user[key]);

//From the object below, print the latitude.

// let abc = {
//     city: "noida",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }

// let {lat} = abc.coordinates;
// console.log(lat);

// What will happen if coordinates is missing? how can you prevent errors?

// let abc = {
//     city: "noida",
//     coordinate: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }
// console.log(abc?.coordinate?.lat);


//Q8 Destructure the city and lat from the abc object given above.

// let abc = {
//     city: "noida",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }
// let {lat} = abc.coordinates;
// let {city} = abc;
// console.log(city);
// console.log(lat);


//Q8 Destructure the Key "first-name" as a variable called firstName.
// let abc = {
//     "first-name": "Mohd",
//     city: "noida",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }

// let {"first-name": firstName} = abc;
// console.log(firstName);

// Q9. use for-in to log all keys in the object.

// let abc = {
//     "first-name": "Mohd",
//     city: "noida",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }

// for(let val in abc){
//     console.log(val);
// }

//Q9. Use object.entiries to print all key and value pair:-

// let abc = {
//     "first-name": "Mohd",
//     city: "noida",
//     coordinates: {
//         lat: 23.4,
//         lng: 77.4,
//     }
// }
// Object.entries(abc).forEach(function(val){
//     console.log(val[0],":",val[1]);
// })


//Q. :-

// let obj = {
//     name: "maaz",
//     info: { score: 80 }
// };
// let obj2 = { ...obj };
// obj2.name = "Jhon";
// console.log(obj.name);

// Q12. Deep clone object:-
// let obj = {
//     name: "maaz",
//     info: { score: 80 }
// };

// let abc = JSON.parse(JSON.stringify(obj))
// abc.info.score = 100
// console.log(abc);;
// console.log(obj);

// Rewrite this safely using optional chaining.
// const obj = {};
// console.log(obj?.profile?.name);

//Use a variable to dynamically assign a property.

const position = "role";
let obj = {
    name: "Maaz",
    [position]: "Software engineer"
}
console.log(obj.role);


