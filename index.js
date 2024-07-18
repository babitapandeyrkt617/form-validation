document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const userName = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const submittedData = document.getElementById('submittedData');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (checkInputs()) {
            displayData();
        }
    });

    function checkInputs() {
        const usernameValue = userName.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        console.log(usernameValue, emailValue, passwordValue, password2Value);
        let isValid = true;

        if (usernameValue === '') {
            setErrorFor(userName, 'Username cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(userName);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(password);
        }

        if (password2Value === '') {
            setErrorFor(password2, 'Password cannot be blank');
            isValid = false;
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, 'Passwords do not match');
            isValid = false;
        } else {
            setSuccessFor(password2);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
        small.style.visibility = 'visible';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        const small = formControl.querySelector('small');
        if (small) {
            small.style.visibility = 'hidden';
            small.innerText = '';
        }
    }

    function displayData() {
        submittedData.innerHTML = `
        <h3>Submitted Data</h3>
        <p><strong>UserName:</strong> ${userName.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Password:</strong> ${password.value}</p>
        <p><strong>Confirm Password:</strong> ${password2.value}</p>
        `;
    }
});