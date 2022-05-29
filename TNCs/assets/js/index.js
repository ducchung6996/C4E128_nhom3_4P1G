var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    margin: 30,
    autoWidth: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 2
        },
        1800: {
            items: 3
        }
    }
});

var x = document.getElementById("loginform");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function loginform() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

const loginForm = document.getElementById("contain-form");
const loginBox = document.getElementById("showform");

function openLoginForm() {
    loginform();
    loginForm.style.visibility = "visible";
    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0px)";
}

function openSignupForm() {
    register();
    loginForm.style.visibility = "visible";
    loginBox.style.opacity = "1";
    loginBox.style.transform = "translateY(0px)";
}

function closeLoginForm() {
    loginForm.style.visibility = "hidden";
    loginBox.style.opacity = "0";
    loginBox.style.transform = "translateY(-500px)";
    document.getElementById("loginform").reset();
    document.getElementById("register").reset();
}

window.onclick = function (event) {
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

const loginWindow = document.getElementById("loginform");
const signupWindow = document.getElementById("register");
const inputBox = document.getElementsByClassName("input-id");

for (let item of inputBox) {
    item.addEventListener("keypress", () => {item.style.background = "none";});
}

function login(event) {
    event.preventDefault()
    const { user, pw } = event.target.elements;
    if (localStorage.getItem(user.value) == undefined) {
        swal({
            title: "Ops",
            text: "Tài khoản này không tồn tại",
            icon: "error",
            button: "Damn son",
        });
        user.style.background = "#ec6051";
        return;
    }

    const userProfile = JSON.parse(localStorage.getItem(user.value))

    if (userProfile.pw === pw.value) {
        swal({
            title: "Welcome",
            text: `Chào mừng ${userProfile.user}`,
            icon: "success",
            button: "Yesssss",
        });
        closeLoginForm();
    } else {
        swal({
            title: "Nope",
            text: "Bạn đã nhập sai mật khẩu",
            icon: "error",
            button: "Nani ?",
        });
        pw.style.background = "#ec6051";
    }
}

loginWindow.addEventListener('submit', login)

function checkIfStringHasSpecialChar(string) {
    let spChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (spChars.test(string)) {
        return true;
    } else {
        return false;
    }
}

function signup(event) {
    event.preventDefault()
    const { user, email, pw, rpw } = event.target.elements;
    if (pw.value !== rpw.value) {
        swal({
            title: "Nah",
            text: "Mật khẩu xác nhận chưa đúng",
            icon: "error",
            button: "Lmao",
        });
        rpw.style.background = "#ec6051";
        return;
    }

    if (localStorage.getItem(user.value)) {
        swal({
            title: "Nah",
            text: "Tài khoản này đã tồn tại",
            icon: "error",
            button: "Lmao",
        });
        user.style.background = "#ec6051";
        return;
    }

    if (checkIfStringHasSpecialChar(user.value) == true) {
        swal({
            title: "Nah",
            text: "Tên người dùng không được chứa ký tự đặc biệt",
            icon: "error",
            button: "Lmao",
        });
        user.style.background = "#ec6051";
        return;
    }

    if (localStorage.getItem(email.value)) {
        swal({
            title: "Bủh",
            text: "Email này đã được sử dụng",
            icon: "error",
            button: "Shettttt",
        });
        email.style.background = "#ec6051";
        return;
    }

    const userProfile = {
        email: email.value,
        pw: pw.value,
    }

    const userEmailProfile = {
        user: user.value,
        pw: pw.value,
    }

    localStorage.setItem(user.value, JSON.stringify(userProfile));
    localStorage.setItem(email.value, JSON.stringify(userEmailProfile));
    swal({
        title: "Well done",
        text: "Đăng ký thành công",
        icon: "success",
        button: "Yeah boizzz",
    });
    closeLoginForm();
}

signupWindow.addEventListener('submit', signup)
