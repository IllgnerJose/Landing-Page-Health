const observador = new IntersectionObserver ((entries) => { 

    entries.forEach ((entry) => {

        if (entry.isIntersecting){

            entry.target.classList.add ("show");

        } 
    })
});

const Elements = document.querySelectorAll (".hidden");

Elements.forEach ((element) => observador.observe(element));

//NAV STICKY
const nav = document.querySelector(".nav");

function stickyActive () {
    nav.classList.toggle("sticky", scrollY > 0);
}

window.addEventListener("scroll", stickyActive);

const hamburger = document.querySelector (".hamburger");

const navBar = document.querySelector(".nav_bar");
const navBarContent = document.querySelector(".nav_content");

function ativaçãoNavBar () {

    navBar.classList.toggle("active");
    navBarContent.classList.toggle("active");
    hamburger.classList.toggle("active")

}

function desativaçãoNavBar () {

    navBar.classList.remove("active");
    navBarContent.classList.remove("active");
    hamburger.classList.remove("active")

}

hamburger.addEventListener("click", ativaçãoNavBar);

const topics = document.querySelectorAll(".nav_bar_topic")

topics.forEach ((topic) => {topic.addEventListener ("click", desativaçãoNavBar)});



