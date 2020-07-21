// This function validates information in the Name and Email fileds on the HTML Sign Up form

function buttonClick() {
    const myName = document.getElementById('myName');
    const myEmail = document.getElementById('myEmail');
    const myButton = document.getElementById('myButton');
    const isValid = true;

    if (!myName.validity.valid) {
        myName.classList.add('input-error')
        myName.value = '';
    }
    if (!myEmail.validity.valid) {
        myEmail.classList.add('input-error')
        myEmail.value = '';
    }
    if (myName.validity.valid) {
        myName.classList.remove('input-error');
    }
    if (myEmail.validity.valid) {
        myEmail.classList.remove('input-error');
    }
    if (myName.validity.valid && myEmail.validity.valid) {
        myButton.innerHTML = "See you in the upsidedown..";
        myButton.style.color = 'red';
        myName.value = '';
        myEmail.value = '';
    }
}
