const scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: '.scrollDiv',
    start: '25% 100%',
    end: '50% 100%',
    scrub: 1,
});

scene3.to('.section-3 #text-1', { opacity: 1, y: -250 }, 0);
scene3.to('.section-3 #planets', { opacity: 1 }, 0.4);
scene3.to('.section-3 #blue', { opacity: 1 }, 0.8);
scene3.to('.section-3 #orbits', { opacity: 1 }, 1.2);

scene3.to('.section-3 #text-1', { y: -850 }, 1.8);
scene3.to('.section-3 #blue', { opacity: 0 }, 1.8);
scene3.to('.section-3 #orbits', { opacity: 0 }, 1.8);

scene3.to('.section-3 #planets', { scale: 1.6, rotate: 200 }, 2.2);

scene3.to('.section-3 #planets', { scale: 6, x: -1000, y: -120 }, 2.5);

scene3.fromTo('.section-3 #text-2', { y: 100, x: '30%' }, { y: -150, opacity: 1 }, 3);
scene3.to('.section-3 #circle-1', { x: -440, y: -436 }, 3);
scene3.to('.section-3 #circle-2', { x: -455, y: -343 }, 3);

scene3.to('.section-3 #text-2', { y: -850 }, 4);
scene3.fromTo('.section-3 #text-3', { y: 300, x: '30%' }, { y: 100, opacity: 1 }, 4);
scene3.to('.section-3 #circle-1', { scale: 1.5 }, 4);
scene3.to('.section-3 #circle-2', { scale: 2.4 }, 4);
scene3.fromTo('.section-3 #text-3', { y: 300, x: '30%' }, { y: 100, opacity: 1 }, 4);

scene3.to('.section-3 #text-3', { y: -850 }, 4.5);
scene3.to('.section-3 #circle-1', { scale: 3 }, 5);
scene3.to('.section-3 #circle-2', { scale: 4.5 }, 5);

scene3.to('.section-3 #text-3', { opacity: 0 }, 6);
scene3.to('.section-3 #circle-1', { opacity: 0 }, 6);
scene3.to('.section-3 #circle-2', { opacity: 0 }, 6);
scene3.to('.section-3 #planets', { opacity: 0 }, 6);
