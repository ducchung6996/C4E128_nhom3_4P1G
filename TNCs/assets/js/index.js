$('.owl-one').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    margin: 30,
    autoWidth: true,
    autoplayTimeout: 5000,
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

$('.owl-two').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay: false,
    center: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 1
        },
        1800: {
            items: 1
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
const pwChangeForm = document.getElementById("pw-change");
const pwChangeBox = document.getElementById("new-pw");

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

function openPwChangeForm() {
    closeLoginForm()
    pwChangeForm.style.visibility = "visible";
    pwChangeBox.style.opacity = "1";
    pwChangeBox.style.transform = "translateY(0px)";
}

function closeLoginForm() {
    pwChangeForm.style.visibility = "hidden";
    pwChangeBox.style.opacity = "0";
    pwChangeBox.style.transform = "translateY(-500px)";
    loginForm.style.visibility = "hidden";
    loginBox.style.opacity = "0";
    loginBox.style.transform = "translateY(-500px)";
    document.getElementById("loginform").reset();
    document.getElementById("register").reset();
    document.getElementById("new-pw").reset();
}

window.onclick = function (event) {
    if (event.target == loginForm || event.target == pwChangeForm) {
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
        item.style.backgroundColor = "#91242d";
    }
}

function showPage(page, event) {
    hidePage();
    let pageComic = document.getElementById(page);
    pageComic.style.visibility = "visible";
    pageComic.style.opacity = "1";
    event.target.style.backgroundColor = "#404040";
}

const loginWindow = document.getElementById("loginform");
const signupWindow = document.getElementById("register");
const inputBox = document.getElementsByClassName("input-id");
const loginBtns = document.getElementById("login-singup");
const userBtns = document.getElementById("user-menu");
const userName = document.getElementById("welcome");

if (localStorage.getItem("rememberUser")){
    const rememberedUser = localStorage.getItem("rememberUser");
    userName.innerText = rememberedUser;
    successLogin();
} else {
    logout()
}

function successLogin() {
    loginBtns.style.display = "none";
    userBtns.style.display = "block";
}

function logout() {
    loginBtns.style.display = "block";
    userBtns.style.display = "none";
    localStorage.removeItem("rememberUser");
}

for (let item of inputBox) {
    item.addEventListener("input", () => { item.style.background = "none"; });
}

function login(event) {
    event.preventDefault()
    const {user, pw, remember} = event.target.elements;
    const userProfile = JSON.parse(localStorage.getItem(user.value));

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

    if (userProfile.user != undefined) {
        swal({
            title: "Welcome",
            text: `Chào mừng ${userProfile.user}`,
            icon: "success",
            button: "Yesssss",
        });
        userName.innerText = userProfile.user;
    } else if (userProfile.pw === pw.value) {
        swal({
            title: "Welcome",
            text: `Chào mừng ${user.value}`,
            icon: "success",
            button: "Yesssss",
        });
        userName.innerText = user.value;
    } else {
        swal({
            title: "Nope",
            text: "Bạn đã nhập sai mật khẩu",
            icon: "error",
            button: "Nani ?",
        });
        pw.style.background = "#ec6051";
        return;
    }

    if (remember.checked == true && userProfile.user != undefined) {
        localStorage.setItem("rememberUser", userProfile.user)
    } else if (remember.checked == true) {
        localStorage.setItem("rememberUser", user.value)
    }

    closeLoginForm();
    successLogin();
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
    
    if (pw.value.includes(" ")) {
        swal({
            title: "Nah",
            text: "Mật khẩu không được có dấu cách",
            icon: "error",
            button: "Lmao",
        });
        pw.style.background = "#ec6051";
        return;
    }

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

function changePassword(event) {
    event.preventDefault()
    const { user, email, pw, rpw } = event.target.elements;
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

    if (email.value !== userProfile.email) {
        swal({
            title: "Nah",
            text: "Bạn đã nhập sai email",
            icon: "error",
            button: "Nani ?",
        });
        email.style.background = "#ec6051";
        return;
    }
    
    if (pw.value.includes(" ")) {
        swal({
            title: "Nah",
            text: "Mật khẩu không được có dấu cách",
            icon: "error",
            button: "Lmao",
        });
        pw.style.background = "#ec6051";
        return;
    }

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

    const userChangeProfile = {
        email: email.value,
        pw: pw.value,
    }

    const userEmailProfile = {
        user: user.value,
        pw: pw.value,
    }

    localStorage.setItem(user.value, JSON.stringify(userChangeProfile));
    localStorage.setItem(email.value, JSON.stringify(userEmailProfile));
    swal({
        title: "Done",
        text: "Thay đổi mật khẩu thành công",
        icon: "success",
        button: "Oke la",
    });
    closeLoginForm();

}

pwChangeBox.addEventListener('submit', changePassword)

