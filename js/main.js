document.getElementById('btn').addEventListener('click', function () {
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;

    if (email == "heath@joker.com" && password == 333) {
        emailInput.value = "";
        passwordInput.value = "";
        alert('Great, Now you got Joker.');

        var elementOne = document.getElementById('open_left_door');
        elementOne.classList.add('open_left_door');
        var elementTwo = document.getElementById('open_right_door');
        elementTwo.classList.add('open_right_door');

    }
    else if (email !== "heath@joker.com" && password !== 333) {
        emailInput.value = "";
        passwordInput.value = "";
        alert("Oh No !! You kissed Zayed Khan's ass.");
    }
    else if (email == "" && password == "") {
        emailInput.value = "";
        passwordInput.value = "";
    }
})


document.getElementById('btn_close').addEventListener('click', function () {
    let emailInput = document.getElementById('email');
    let email = emailInput.value;
    let passwordInput = document.getElementById('password');
    let password = passwordInput.value;

    var elementOne = document.getElementById('open_left_door');
    elementOne.classList.remove('open_left_door');
    var elementTwo = document.getElementById('open_right_door');
    elementTwo.classList.remove('open_right_door');

    alert("Oh No !! You kissed Hero Alam's ass.");
})

