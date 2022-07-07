// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


var tl = gsap.timeline({ defaults: {duration: 1, ease: "ease", opacity:0} } );

tl.set(".site__main .hero .hero__media", {scale: 1});

tl.from(".site__main .hero .hero__media", {
        y: 600,
        scale: 0,
    })

    .to('h1', { 
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
        opacity: 1, 
        y: 0,
        duration: 1.2,
        ease: 'power4.inOut'
    })
    
    .to('.site__main .hero .hero__content button', { 
        'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
        opacity: 1, 
        y: 0,
        ease: 'power4.inOut'
    }, '-=1')

    .from(".navbar-brand", {
        y: 200,
    })

    .from(".nav-link, .nav-item .dropdown-item", {
        y: 300,
        stagger: 0.3,
    });

    
gsap.from(".news__media--wrapper .media", {
    y: 1200,
    duration: 1,
    ease: 'ease',
    scrollTrigger: {
        trigger: ".news__media",
        toggleActions: "restart none none none",
    },
    stagger: 0.3,
});

// beneficiaries scroller

function beneficiaryMedia() {
    let sections = document.querySelectorAll(".beneficiaries__media--container .media")[0];
    let scrollTween = gsap.to(".beneficiaries__media--container", {
        x: -9.5 * sections.clientWidth,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
            trigger: ".beneficiaries__section",
            start: "-10% top",
            end: 'bottom',
            scrub: 1,
            pin: true
        }
    });

    gsap.to(".beneficiaries__media--container", {
        y: -80,
        duration: 1,
        scrollTrigger: {
            trigger: ".beneficiaries__section",
            start: "left center",
            containerAnimation: scrollTween,
        }
    });
};

window.addEventListener('load', beneficiaryMedia)

var timer
function handleResize() {
  clearTimeout(timer)
  timer = setTimeout(beneficiaryMedia, 500)
}

window.addEventListener('resize', handleResize)

// news scroller
var mql = window.matchMedia("(max-width: 785px)")

function newsMedia(e) {
    if (e.matches) {
        let sections = document.querySelectorAll(".news__media--wrapper .media")[0];
        let scrollTween = gsap.to(".news__media > .news__media--wrapper", {
            x: -3 * sections.clientWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".news__section",
                start: "-10% top",
                end: '=+100',  
                scrub: 1,
                pin: true
            }
        });

        gsap.to(".news__media > .news__media--wrapper", {
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".news__section",
                start: "left center",
                containerAnimation: scrollTween,
            }
        });
    } 
};

newsMedia(mql);
mql.addEventListener('change', newsMedia, false);

function galleryMedia(e) {
    if (e.matches) {
        let sections = document.querySelectorAll(".gallery__media--wrapper .media")[0];
        let scrollTween = gsap.to(".gallery__media--wrapper", {
            x: -2 * sections.clientWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery__section",
                start: "100% top",
                end: 'bottom',  
                scrub: 2,
            }
        });

        gsap.to(".gallery__media--wrapper", {
            y: 80,
            duration: 1,
            scrollTrigger: {
                trigger: ".gallery__section",
                start: "left center",
                containerAnimation: scrollTween,
            }
        });
    } 
};

galleryMedia(mql);
mql.addEventListener('change', galleryMedia, false);
