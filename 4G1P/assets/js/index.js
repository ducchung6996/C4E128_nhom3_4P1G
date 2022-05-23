var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:25,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:2
        },            
        1800:{
            items:3
        }
    }
});


const loginBtn = document.getElementById("login-form")
const signUpBtn = document.getElementById("signup-form")
const loginInfo = document.getElementsByClassName("login-input")

function openLoginForm() {
    loginBtn.style.transform = "scale(1)";
    loginBtn.style.visibility = "1";
    loginBtn.style.opacity = "1";
}

function openSignUpForm() {
    signUpBtn.style.transform = "scale(1)";
    signUpBtn.style.visibility = "1";
    signUpBtn.style.opacity = "1";
}

function closeLoginForm() {
    loginBtn.style.transform = "scale(0)";
    loginBtn.style.visibility = "0";
    loginBtn.style.opacity = "0";

}

function closeSignUpForm() {
    signUpBtn.style.transform = "scale(0)";
    signUpBtn.style.visibility = "0";
    signUpBtn.style.opacity = "0";
}

window.onclick = function(event) {
    if (event.target == loginBtn || event.target == signUpBtn) {
        closeLoginForm();
        closeSignUpForm();
    }
}

