let button = document.querySelector(".button-up");
let header = document.querySelector(".header-nav");
let li = document.querySelectorAll(".header-nav ul a");


window.onscroll = function() {

    if(window.scrollY >= 40) {
        button.classList.add("show-button")
    }
    else {
    button.classList.remove("show-button")
    }
}
button.onclick = function() {
    window.scrollTo ({
        top:0,
        behavior: "smooth",
    });
}

window.onscroll = function() {

    if(window.scrollY >= 40) {
        header.classList.add("show-nav");
        li.classList.add("aaa-p");
    }
    else {
        header.classList.remove("show-nav")
        li.classList.add("aaa-p");
    }
}