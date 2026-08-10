// if, else if, else, switch-case, early return.

// if ("234" > "14560") {
//     console.log("Hello");

// } else if (12 > 34) {
//     console.log("Hey!");

// } else {
//     console.log("Bye!");

// }


// let key = 36;

// switch (key) {
//     case 1:  
//         console.log("Hello");
//         break;

//     case 2:
//         console.log("Hey");
//         break;    

//     case 3:
//         console.log("Bye");
//         break;


//     default:
//         console.log("invalid input");
//         break;
// }



// console.log(getGrade(undefined));

// function getGrade(score){

//     if (score == null || score == undefined) return "Invalid Marks";

//     score = Number(score);

//     if(score == NaN) return "Invalid Marks";


//     if (score >= 90 && score <= 100) return "A+";
//     else if (score >= 80 && score <= 89) return "A";
//     else if (score >= 70 && score <= 79) return "B";
//     else if (score >= 60 && score <= 69) return "C";
//     else if (score >= 33 && score <= 59) return "D";
//     else if (score >= 0 && score <= 32) return "Fail";
//     else return "Invalid Marks";
// }


function rps(uMove, cMove) {

    if (uMove === cMove) return "Match tie!";

    if (
        (uMove === "Rock" || uMove === "Paper" || uMove === "Scissor") && 
        (cMove === "Rock" || cMove === "Paper" || cMove === "Scissor")
     ) {
        if (uMove === "Paper"&& cMove === "Rock" ) return "You Win!";
        if (uMove === "Rock"&& cMove === "Scissor" ) return "You Win!";
        if (uMove === "Scissor"&& cMove === "Paper" ) return "You Win!";

        return "Computer Win!";
    }

    else {
        return "invalid input";
    }

}

console.log(rps("Scissor", "Paper"));

