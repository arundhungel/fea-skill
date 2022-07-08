// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import Scrollbar from 'smooth-scrollbar';

import $ from "jquery";

gsap.registerPlugin(ScrollTrigger, Draggable);


// Smooth Body Scroll
const scroller = document.getElementById('scroll-container');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.08, delegateTo: document, alwaysShowTracks: true });

ScrollTrigger.scrollerProxy(scroller, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);

ScrollTrigger.defaults({ scroller: scroller });

// Smoothe Body Scroll ends

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

    .from("nav .nav-link, .nav .nav-item .dropdown-item", {
        y: 300,
        stagger: 0.2,
    });


gsap.to(".site__main .hero .hero__title", {
    yPercent: 200,
    scale: .7,
    ease: "ease",
    color: '#fff',
    background: 'rgba(0, 0,0,50%)',
    padding: '15px 20px',
    scrollTrigger: {
      trigger: ".site__main .hero__content",
      scrub: true,
      start: '-20%',
      toggleActions: "restart none none none",
    },
});


// news scroller

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

var mql = window.matchMedia("(max-width: 785px)")

function newsMedia(e) {
    if (e.matches) {
        let sections = document.querySelectorAll(".news__media--wrapper-second .media")[0];
        let scrollTween = gsap.to(".news__media .news__media--wrapper-second", {
            x: -3 * sections.clientWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".news__media--wrapper-second",
                start: "-20% top",
                end: 'bottom',  
                scrub: 1,
            }
        });

        gsap.to(".news__media .news__media--wrapper-second", {
            y: -80,
            duration: 1,
            scrollTrigger: {
                trigger: ".news__section",
                start: "left",
                containerAnimation: scrollTween,
            }
        });

        Draggable.create(".news__media .news__media--wrapper-second", {
            bounds:".news__media",
            allowNativeTouchScrolling:true,
            type:"x",
            throwProps: true,
            }
        );

        $( window ).on( "load", function() {
            $(".news__media .news__media--wrapper-second").css("width", 3.5 * sections.clientWidth, "max-width",  3.5 * sections.clientWidth);
        });
    } 
};

newsMedia(mql);
mql.addEventListener('change', newsMedia, 500);

// news scroller ends

// beneficiaries scroller

// function beneficiaryMedia() {
//     let sections = document.querySelectorAll(".beneficiaries__media--container .media")[0];
//     let scrollTween = gsap.to(".beneficiaries__media--container", {
//         x: -9.5 * sections.clientWidth,
//         ease: "none", // <-- IMPORTANT!
//         scrollTrigger: {
//             trigger: ".beneficiaries__section",
//             start: "-10% top",
//             end: 'bottom',
//             scrub: 1,
//             pin: true
//         }
//     });

//     gsap.to(".beneficiaries__media--container", {
//         y: -80,
//         duration: 1,
//         scrollTrigger: {
//             trigger: ".beneficiaries__section",
//             start: "left center",
//             containerAnimation: scrollTween,
//         },
//     });

// };

Draggable.create(".beneficiaries__media--container", {
    bounds:".beneficiaries__media",
    allowNativeTouchScrolling:true,
    type:"x",
    throwProps: true,
    }
);

$( window ).on( "load", function() {
    let sections = document.querySelectorAll(".beneficiaries__media--container .media")[0];
    $(".beneficiaries__media--container").css("width", 12 * sections.clientWidth);
});

// window.addEventListener('load', beneficiaryMedia)

// var timer
// function handleResize() {
//   clearTimeout(timer)
//   timer = setTimeout(beneficiaryMedia, 500)
// }

// window.addEventListener('resize', handleResize)

// beneficiaries scroller ends

// our mission

gsap.to(".hero.mission .hero__media", {
    xPercent: 10,
    ease: "ease",
    scrollTrigger: {
      trigger: ".mission__section",
      start: '-20%',
      scrub: true,
      toggleActions: "restart none none none",
    },
});

// our mission ends

// Founder 

gsap.from(".founder__section img", {
    y: 600,
    duration: 1,
    ease: 'ease',
    scrollTrigger: {
        trigger: ".founder__media--container",
        toggleActions: "restart none none none",
    },
    stagger: 0.3,
});

// Founder ends


// gallery scroller

gsap.from(".gallery__media--wrapper .media", {
    y: 1200,
    duration: 1,
    ease: 'ease',
    scrollTrigger: {
        trigger: ".gallery__media--wrapper",
        toggleActions: "restart none none none",
    },
    stagger: 0.3,
});

function galleryMedia(e) {
    if (e.matches) {
        let sections = document.querySelectorAll(".gallery__media--wrapper .media")[0];
        let scrollTween = gsap.to(".gallery__media--wrapper", {
            x: -2 * sections.clientWidth,
            ease: "none",
            scrollTrigger: {
                trigger: ".gallery__section",
                start: "90%",
                end: "30%",
                scrub: 1,
            }
        });

        gsap.to(".gallery__media--wrapper", {
            y: 0,
            duration: .5,
            scrollTrigger: {
                trigger: ".gallery__section",
                start: "left center",
                containerAnimation: scrollTween,
            }
        });

        Draggable.create(".gallery__media--wrapper", {
            bounds:".gallery__media",
            allowNativeTouchScrolling:true,
            type:"x",
            throwProps: true,
            }
        );

        $( window ).on( "load", function() {
            $(".gallery__media--wrapper").css("width", 3.5 * sections.clientWidth);
        });
    } 
};

galleryMedia(mql);
mql.addEventListener('change', galleryMedia, 500);

// gallery scroller ends

// footer animation
gsap
gsap.from("footer .header__social--link, .footer__copyright span", {
    y: 20,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".footer",
        toggleActions: "restart none none none",
    }
});