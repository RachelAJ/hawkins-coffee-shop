
const myForm = document.getElementById('myForm');
const myName = document.getElementById('myName');
const myEmail = document.getElementById('myEmail');
const myButton = document.getElementById('myButton');

// function validateEmail(myEmail) { 
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(myEmail);

function buttonClick(e) {
    e.preventDefault();
    myButton.innerHTML = "See you in the upsidedown..";
    myButton.style.color = 'red';
    myName.value = '';
    myEmail.value = '';
}

myButton.addEventListener("click", buttonClick);












// function buttonClick(e) {
//     e.preventDefault();
//     myButton.innerHTML = "See you in the upsidedown..";
//     myName.value = '';
//     myEmail.value = '';
// }

// myButton.addEventListener('click', () => {
//     myButton.style.color = 'red';
// });

// myButton.addEventListener("click", buttonClick);