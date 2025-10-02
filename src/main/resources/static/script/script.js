let backgroundVideo1 = document.getElementById("section1bgvideo")
let backgroundVideo4 = document.getElementById("section4bgvideo")
backgroundVideo1.play();
backgroundVideo4.play();
backgroundVideo1.playbackRate = 0.2;

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

const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

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



document.querySelectorAll('input[name="rating"]').forEach((star) => {
    star.addEventListener('change', () => {
        console.log("You rated:", star.value);
    });
});

const aboutPara = document.querySelector('.about-para');
const profileGlow = document.querySelector('.profile-glow');



window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    const sectionTop1 = aboutPara.getBoundingClientRect().top;
    const sectionBottom1 = aboutPara.getBoundingClientRect().bottom;

    if (sectionTop1 < windowHeight && sectionBottom1 > 0) {
        aboutPara.classList.add('zoomed-out');
        profileGlow.classList.add('zoomed-out');
    } else {
        aboutPara.classList.remove('zoomed-out');
        profileGlow.classList.remove('zoomed-out');
    }


    const sectionTop2 = projectCards[0].getBoundingClientRect().top;
    const sectionBottom2 = projectCards[projectCards.length - 1].getBoundingClientRect().bottom;

    if (sectionTop2 < windowHeight && sectionBottom2 > 0) {
        sectionTop2
    }


});

const projectCards = document.querySelectorAll('.project-cont .project-cards');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // observer.unobserve(entry.target); // stops further toggling
        } else {
            // remove class so animation can replay when element re-enters
            entry.target.classList.remove('in-view');
        }
    });
}, {
    root: null,
    rootMargin: '300px',
    threshold: 0.05 // tweak to control how much must be visible
});

projectCards.forEach(card => observer.observe(card));


