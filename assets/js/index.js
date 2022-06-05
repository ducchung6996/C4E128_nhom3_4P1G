window.addEventListener('scroll', reveal);
function reveal() {
    let revealItems = document.getElementsByClassName("reveal");
    for (let item of revealItems) {
        let windowHeight = window.innerHeight;
        let revealTop = item.getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add("displayed");
        } else {
            item.classList.remove("displayed");
        }
    }
}

$('.owl-one').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    center: true,
    margin: 60,
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
    autoplay: true,
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
    for (let item of inputBox) {
        item.style.background = "none";
    }
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

if (localStorage.getItem("rememberUser")) {
    const rememberedUser = localStorage.getItem("rememberUser");
    userName.innerText = rememberedUser;
    successLogin();
} else {
    loginBtns.style.display = "block";
    userBtns.style.display = "none";
}

function successLogin() {
    loginBtns.style.display = "none";
    userBtns.style.display = "block";
}

function logout() {
    Swal.fire({
        title: 'Bạn có muốn đăng xuất ?',
        showDenyButton: true,
        confirmButtonText: 'Yep',
        confirmButtonColor: '#3085d6',
        denyButtonText: `Nah`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Gud byeeeeeeeeeee',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Oke'
            });
            loginBtns.style.display = "block";
            userBtns.style.display = "none";
            localStorage.removeItem("rememberUser");
        } else if (result.isDenied) {
            return;
        }
    })
}

for (let item of inputBox) {
    item.addEventListener("input", () => { item.style.background = "none"; });
}

function login(event) {
    event.preventDefault()
    const { user, pw, remember } = event.target.elements;
    const userProfile = JSON.parse(localStorage.getItem(user.value));

    if (localStorage.getItem(user.value) == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tài khoản này không tồn tại',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Damn son'
        });
        user.style.background = "#ec6051";
        return;
    }

    if (userProfile.user != undefined) {
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: `Chào mừng ${userProfile.user}`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yesssss'
        });
        userName.innerText = userProfile.user;
    } else if (userProfile.pw === pw.value) {
        Swal.fire({
            icon: 'success',
            title: 'Welcome',
            text: `Chào mừng ${user.value}`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yesssss'
        });
        userName.innerText = user.value;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Nope',
            text: 'Bạn đã nhập sai mật khẩu',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Nani ?'
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
        Swal.fire({
            icon: 'error',
            title: 'Nah',
            text: 'Mật khẩu không được có dấu cách',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        pw.style.background = "#ec6051";
        return;
    }

    if (pw.value !== rpw.value) {
        Swal.fire({
            icon: 'error',
            title: 'Nah',
            text: 'Mật khẩu xác nhận chưa đúng',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        rpw.style.background = "#ec6051";
        return;
    }

    if (localStorage.getItem(user.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Nah',
            text: 'Tài khoản này đã tồn tại',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        user.style.background = "#ec6051";
        return;
    }

    if (checkIfStringHasSpecialChar(user.value) == true) {
        Swal.fire({
            icon: 'error',
            title: 'Nah',
            text: 'Tên người dùng không được chứa ký tự đặc biệt',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        user.style.background = "#ec6051";
        return;
    }

    if (localStorage.getItem(email.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Bủh',
            text: 'Email này đã được sử dụng',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Shettttt'
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
    Swal.fire({
        icon: 'success',
        title: 'Well done',
        text: 'Đăng ký thành công',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yeah boizzz'
    });
    closeLoginForm();
}

signupWindow.addEventListener('submit', signup)

function changePassword(event) {
    event.preventDefault()
    const { user, email, pw, rpw } = event.target.elements;
    if (localStorage.getItem(user.value) == undefined) {
        Swal.fire({
            icon: 'error',
            title: 'Ops',
            text: 'Tài khoản này không tồn tại',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Damn son'
        });
        user.style.background = "#ec6051";
        return;
    }

    const userProfile = JSON.parse(localStorage.getItem(user.value))

    if (email.value !== userProfile.email) {
        Swal.fire({
            title: 'Nah',
            text: 'Bạn đã nhập sai email',
            icon: 'error',
            confirmButtonText: 'Nani ?'
        });
        email.style.background = "#ec6051";
        return;
    }

    if (pw.value.includes(" ")) {
        Swal.fire({
            title: 'Nah',
            text: 'Mật khẩu không được có dấu cách',
            icon: 'error',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        pw.style.background = "#ec6051";
        return;
    }

    if (pw.value !== rpw.value) {
        Swal.fire({
            title: 'Nah',
            text: 'Mật khẩu xác nhận chưa đúng',
            icon: 'error',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        rpw.style.background = "#ec6051";
        return;
    }

    if (pw.value === userProfile.pw) {
        Swal.fire({
            title: 'Nah',
            text: 'Mật khẩu không được trùng với mật khẩu cũ',
            icon: 'error',
            confirmButtonColor: '#e74c3c',
            confirmButtonText: 'Lmao'
        });
        pw.style.background = "#ec6051";
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
    Swal.fire({
        title: 'Done',
        text: 'Thay đổi mật khẩu thành công',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Oke la'
    });
    closeLoginForm();

}

pwChangeBox.addEventListener('submit', changePassword)

