let form = document.querySelector("form");
let stlBtn = document.querySelector("#stlBtn")
// let uplBtn = document.querySelector("#uplBtn");
let fileInp = document.querySelector("#fileInp");
let main = document.querySelector("#main");
let inputs = document.querySelectorAll("input:not([type='submit'])");


// uplBtn.addEventListener("click",function(){
//     fileInp.click();
// })

inputs.forEach(function (val) {
    val.addEventListener("input", function () {
        let isFilled = true;
        inputs.forEach(function(inp){
            if(inp.value.trim() === ""){
                isFilled = false;
            } 
        });

        if (isFilled === true) {
            stlBtn.removeAttribute("disabled")
        } else {
            stlBtn.setAttribute("disabled", true);
        }
    })
})

form.addEventListener("submit", function (val) {
    val.preventDefault();

    let div = document.createElement("div");
    div.classList.add("ProfileCard")

    let box = document.createElement("img")
    box.classList.add("box");
    box.setAttribute("src", val.target[4].value);
    div.appendChild(box);


    let h3 = document.createElement("h3");
    h3.textContent = val.target[0].value;
    div.appendChild(h3)
    let h5 = document.createElement("h5");
    h5.textContent = val.target[1].value
    div.appendChild(h5)
    let h4 = document.createElement("h4");
    h4.textContent = val.target[2].value;
    div.appendChild(h4)
    let p = document.createElement("p");
    p.textContent = val.target[3].value;
    div.appendChild(p);

    main.appendChild(div)


    // console.log(div);

})