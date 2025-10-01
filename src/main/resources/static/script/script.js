const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});
//play videos
let backgroundVideo1 = document.getElementById("section1bgvideo")
let backgroundVideo4 = document.getElementById("section4bgvideo")
backgroundVideo1.play();
backgroundVideo4.play();
backgroundVideo1.playbackRate = 0.2;
let projectCards = document.querySelectorAll(".project-cards");
let sectionBackgroundVideos = document.querySelectorAll(".background-videos");
let sectionContentCont = document.querySelectorAll(".b-v-section")
let body = document.querySelector("body")

function setBackgroundVideoStyles() {
    sectionBackgroundVideos.forEach((v, i) => {
        v.style.height = getComputedStyle(sectionContentCont[i]).height;
        v.style.width = getComputedStyle(body).width;
    });
}
setBackgroundVideoStyles();
window.addEventListener("resize", setBackgroundVideoStyles);

dawnArrowIcon = document.querySelector(".down-arrow-btn")
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        dawnArrowIcon.style.display = "none"
    } else {
        dawnArrowIcon.style.display = "inline-block"
    }
})
dawnArrowIcon.addEventListener("click", (e) => {
    window.scrollBy({
        top: 200,
        behavior: "smooth"
    });
})

const container = document.querySelector('.project-cont');
const cards = container.querySelectorAll('.project-cards');
console.log(container);
console.log(cards);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            cards.forEach(card => {
                card.style.transform = 'translateX(0)';
            });
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
});
cards.forEach(card => observer.observe(card));

document.querySelectorAll('input[name="rating"]').forEach((star) => {
    star.addEventListener('change', () => {
        console.log("You rated:", star.value);
    });
});
