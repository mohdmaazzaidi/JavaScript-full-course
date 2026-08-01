
let clickCount = localStorage.getItem('clickCount') || 0;
function buttonPressed() {
    console.log("pressed");
    clickCount++;
    localStorage.setItem('clickCount', clickCount);
    updateButton();
}

function updateButton() {
    let button = document.querySelector('#my-button');
    if (clickCount % 2 == 0) {
        button.classList.remove('js-odd');
        button.classList.add('js-even')
    } else {
        button.classList.remove('js-even');
        button.classList.add('js-odd')
    }
    button.innerText = clickCount;
}

updateButton()





function doGreeting(personName = 'Dear') {
    let date = new Date();
    let hours = date.getHours();
    let heading = document.querySelector('#greeting');
    if (hours > 5 && hours <= 12) {
        heading.innerText = `Good Morning ${personName}`;
    } else if (hours > 12 && hours < 18) {
        heading.innerText = `Good Afternoon ${personName}`;
    } else {
        heading.innerText = `Good night ${personName}`;
    }
}
doGreeting('Maaz');
