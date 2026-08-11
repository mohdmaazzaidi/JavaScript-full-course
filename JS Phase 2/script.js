let p = document.querySelectorAll("p");   // To select HTML
p.forEach(function(val){
    val.style.fontSize = "22px"         // To apply style
    let isRed = false;
    val.addEventListener("click",function(){          // To add event
        if(isRed === false){
            val.style.color = "red";
            isRed = true;
        } else {
            val.style.color = "green";
            isRed = false;
        }
    })
})

let h1 = document.querySelectorAll("h1");
h1.forEach(function(val){
    val.remove();
})

let div = document.querySelector("div");
div.addEventListener("dblclick",function(){
    div.style.color = "orange"
    let content = div.innerText = "Hello this my first JS event class";
    div.innerHTML = `<h1>${content}</h1>`    // To update HTML
})




let inputBtn = document.querySelector("input");
inputBtn.addEventListener("input",function(dtls){
    if(dtls.data !== null && dtls.data !== " "){
        console.log(dtls.data);
    }
})

