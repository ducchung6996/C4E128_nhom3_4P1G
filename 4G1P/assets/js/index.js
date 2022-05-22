var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    center:true,
    nav:false,
    dots:false,
    margin:100,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        1000:{
            items:3
        }
    }
});


const loginBtn = document.getElementById("login-form")
const header = document.getElementsByTagName("header")

function openLoginForm() {
    loginBtn.style.display = 'flex';
}

function closeLoginForm() {
    loginBtn.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == loginBtn) {
        loginBtn.style.display = "none";
    }
}