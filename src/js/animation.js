// GSAP
import gsap from "gsap";

var tl = gsap.timeline({ defaults: {duration: 1, ease: "ease", opacity:0} } );

tl.set(".site__main .hero .hero__media", {scale: 1});

tl.from(".site__main .hero .hero__media", {
        y: 600,
        scale: 0,
    })
    .from(".site__main .hero .hero__content", {
        y: 800,
        ease: 'back',
        stagger: 0.2,
        duration: 1.5
    })
    .from(".navbar-brand", {
        y: 200,
    })
    .from(".nav-link", {
        y: 300,
        stagger: 0.3,
    });

