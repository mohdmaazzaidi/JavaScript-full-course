let p = document.querySelectorAll("p");
p.forEach(function(val){
    val.classList.add("abc");
    let isBlue = true;
    val.addEventListener("click",function(){
        if(isBlue === true){
            val.style.color = "Red";
            isBlue = false;
        } else {
            val.style.color = "blueviolet";
            isBlue = true;
        }
    })
})

let div = document.querySelector("div");
div.addEventListener("dblclick", function(){
    let newMsg = div.textContent;
    div.innerHTML = `<h1>${newMsg}</h1>`
    div.style.color = "Orange"
})

let h1 = document.querySelectorAll("h1");
h1.forEach(function(val){
    val.remove();
})

let newEle = document.createElement("input");
newEle.setAttribute("placeholder","Enter you name here");
newEle.setAttribute("type","text");
newEle.style.display = "block";
document.querySelector("p").prepend(newEle)

