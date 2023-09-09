//initiate variables
let form = document.querySelector('form')
let email = document.getElementById("email")
let password = document.getElementById("password")
let submit = document.getElementById("submit")
let change = document.getElementById("change")


// Password validation

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value === "") {
        alert("Email is empty");
        return;
    } else if (password.value === "") {
        alert("Password is empty");
        return;
    }

    //check alert
    const passwordValue = password.value;
    if (!isValidPassword(passwordValue)) {
        alert("Password must include at least one capital letter, one number, and one special character.");
        return;
    }

    const emailValue = email.value;
    if (!isValidEmail(emailValue)) {
        alert("Email is not valid 💀^_~");
        return;
    }

    //switch button
    change.style.display = "block"
    submit.style.display = "none"

    //stringify and local storage
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd)

    const json = JSON.stringify(obj)
    localStorage.setItem('form', json)

    //read only before change button
    email.readOnly = true;
    email.innerText = email.value
    password.readOnly = true;
    password.innerText = password.value
})


//can edit only if change is pressed
change.addEventListener("click", function () {
    email.readOnly = false;
    password.readOnly = false;
    change.style.display = "none"
    submit.style.display = "block"
})

//validate password
function isValidPassword(password) {
    const capitalLetter = /[A-Z]/;
    const number = /[0-9]/;
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    return (
        capitalLetter.test(password) &&
        number.test(password) &&
        specialCharacter.test(password)
    );
}

//validate gmail
function isValidEmail(email) {
    const gmail = "@gmail.com";

    return email.endsWith(gmail);
}


// let cursor = document.querySelector(".cursor")
// let cursor2 = document.querySelector(".cursor2")
// let Ring = document.getElementById('Ring1');
// let Ball = document.getElementById('Ball1');

// window.addEventListener('mousemove', function (event) {
//     let valueY = event.clientY;
//     let valueX = event.clientX;
//     Ring.style.top = valueY * 0.10 + 'px';
//     Ring.style.left = valueX * 0.10 + 'px';
//     Ball.style.top = valueX * 0.10 + 'px';
//     Ball.style.left = valueY * 0.10 + 'px';

//     cursor.style.cssText = cursor2.style.cssText = "left: " + valueX + "px; top: " + valueY + "px;";

// });


//movment after cursor/client x and y value hehehehehehehehehhehehehehehhehehehhedbdewinoiewnciupr ecn oåirj fouirqm ocimneruipf
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
let Ring = document.getElementById('Ring1');
let Ball = document.getElementById('Ball1');
let sand = document.getElementById("img")

let throttleTimeout;
const throttleDelay = 16; // Update cursor position approximately 60 times per second (1000ms / 60fps)

window.addEventListener('mousemove', function (event) {
    if (!throttleTimeout) {
        throttleTimeout = setTimeout(function () {
            let valueY = event.clientY;
            let valueX = event.clientX;
            Ring.style.top = valueY * 0.10 + 'px';
            Ring.style.left = valueX * 0.10 + 'px';
            Ball.style.top = valueX * 0.10 + 'px';
            Ball.style.left = valueY * 0.10 + 'px';
            sand.style.left = valueX * 0.03 + 'px';

            cursor.style.cssText = cursor2.style.cssText = "left: " + valueX + "px; top: " + valueY + "px;";

            throttleTimeout = null;
        }, throttleDelay);
    }
});


//extreamly/unnecessarily long animation
document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector(".loader");
    
    // Delayed function to hide the loader with a fade-out effect
    setTimeout(function () {
      loader.style.transition = "opacity 1s ease-in";
      loader.style.opacity = "0";
      
      // After the fade-out animation completes (1 second in this case), hide the loader completely
      setTimeout(function () {
        loader.style.display = "none";
      }, 1000);
    }, 5000); // 5000 milliseconds = 5 seconds
  });
  