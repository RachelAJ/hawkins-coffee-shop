// alert('Welcome to Coffee & Contemplation! Make sure to sign up for our emails!')

let btn = document.querySelector(".submit");

function buttonClick(e) {
    e.preventDefault();
    btn.innerHTML = "Thank you! We'll be in touch!";
}

btn.addEventListener("click", buttonClick);