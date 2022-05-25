var x = document.getElementById("loginform1");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function loginform1(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

var a = document.getElementsByClassName("login-btn")
var b = document.getElementById("contain-form")
function showform(){
    b.style.display = "block"
}

const loginForm = document.getElementById("contain-form")
const loginBox = document.getElementById("showform")

function openLoginForm() {
    loginForm.style.visibility = "visible";
    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0px)";
    loginform1();
}

function openSignupForm() {
    loginForm.style.visibility = "visible";
    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0px)";
    register();
}

function closeLoginForm() {
    loginForm.style.visibility = "hidden";
    loginBox.style.opacity = "0";
    loginBox.style.transform = "translateY(-500px)";
}

window.onclick = function(event) {
    if (event.target == loginForm) {
        closeLoginForm();
    }
}