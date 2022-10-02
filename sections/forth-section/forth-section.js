const scene4 = gsap.timeline();
ScrollTrigger.create({
    animation: scene4,
    trigger: '.scrollDiv',
    start: '50% top',
    end: '75% 100%',
    scrub: 1,
});

scene4.fromTo('.section-4 #car', { x: -1800, y: 100 }, { x: 0, y: 100 }, 0);
scene4.fromTo('.section-4 #text-1', { opacity: 0 }, { opacity: 1 }, 0);

scene4.to('.section-4 #car', { y: 200 }, 0.5);
scene4.to('.section-4 #car', { y: 100 }, 1.5);

scene4.to('.section-4 #text-1', { opacity: 0 }, 2);
scene4.fromTo('.section-4 #text-2', { opacity: 0 }, { opacity: 1 }, 3);
scene4.to('.section-4 #car', { y: 200, duration: 2 }, 3);
scene4.to('.section-4 #car', { y: 100, duration: 2 }, 5);

scene4.to('.section-4 #text-2', { opacity: 0 }, 5);
scene4.fromTo('.section-4 #text-3', { opacity: 0 }, { opacity: 1 }, 7);
scene4.to('.section-4 #car', { y: 200, duration: 2 }, 9);
scene4.to('.section-4 #car', { y: 100, duration: 2 }, 11);

scene4.to('.section-4 #text-3', { opacity: 0 }, 11);
scene4.fromTo('.section-4 #text-4', { opacity: 0 }, { opacity: 1 }, 13);
scene4.to('.section-4 #car', { y: 200, duration: 2 }, 15);
scene4.to('.section-4 #car', { y: 100, duration: 2 }, 17);

scene4.to('.section-4 #text-4', { opacity: 0 }, 17);
scene4.fromTo('.section-4 #text-5', { opacity: 0 }, { opacity: 1 }, 19);
scene4.to('.section-4 #car', { y: 200, duration: 2 }, 21);
scene4.to('.section-4 #car', { y: 100, duration: 2 }, 23);

scene4.to('.section-4 #text-5', { opacity: 0 }, 23);
scene4.fromTo('.section-4 #text-6', { opacity: 0 }, { opacity: 1 }, 25);
scene4.to('.section-4 #car', { y: 200, duration: 2 }, 27);
scene4.to('.section-4 #car', { y: 100, duration: 2 }, 29);

scene4.to('.section-4 #text-6', { opacity: 0 }, 31);
scene4.to('.section-4 #car', { rotate: -20, y: 300, x: -300, duration: 2 }, 33);
scene4.to('.section-4 #car', { y: -800, x: 800, duration: 2 }, 36);
