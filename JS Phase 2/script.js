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
let isIncleased = false;
div.addEventListener("dblclick", function(){
    if(isIncleased == false){
    let newMsg = div.textContent;
    div.innerHTML = `<h1>${newMsg}</h1>`
    div.style.color = "Orange"
    isIncleased = true;
    } else {
        div.innerHTML = div.textContent;
        div.style.color = "green"
        isIncleased = false;
    }
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
newEle.addEventListener("input",function(val){
    if(val !== null){
        console.log(val.data);
    }
})


let li = document.querySelectorAll("li");
li.forEach(function(val,index){
    if(index%2 === 1){
        val.style.color = "red";
    }
})

let select = document.querySelector("Select");
let newH3 = document.createElement("h3");
document.body.append(newH3)

select.addEventListener("change",function(val){
    newH3.textContent = `You hava selected ${val.target.value} device`
})