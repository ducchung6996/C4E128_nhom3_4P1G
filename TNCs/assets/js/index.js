var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    center:true,
    margin:30,
    autoWidth:true,
    autoplayTimeout:4000,
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

function hidePage() {
    let page = document.getElementsByClassName("commic-type");
    let btn = document.getElementsByClassName("nav_content_link");
    for (let item of page) {
      item.style.visibility = "hidden";
      item.style.opacity = "0";
    }
    for (let item of btn) {
      item.style.backgroundColor = "#e4e4e4";
    }
  }
  
  function showPage(page, event) {
    hidePage();
    let pageComic = document.getElementById(page);
    pageComic.style.visibility = "visible";
    pageComic.style.opacity = "1";
    event.target.style.backgroundColor = "#f9f9f9";
  }