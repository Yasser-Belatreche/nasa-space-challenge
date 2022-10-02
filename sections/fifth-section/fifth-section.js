const scene5 = gsap.timeline();
ScrollTrigger.create({
    animation: scene5,
    trigger: '.scrollDiv',
    start: '75% top',
    end: '100% 100%',
    scrub: 1,
});

scene5.to('.section-5 #first', { opacity: 1 }, 0);

scene5.to('.section-5 #first', { x: '-60%', scale: 2 }, 1);

scene5.to('.section-5 #second', { opacity: 1 }, 2);
scene5.fromTo('.section-5 #text-1', { opacity: 0 }, { opacity: 1 }, 3);

scene5.to('.section-5 #first', { opacity: 0, duration: 1 }, 4);
scene5.to('.section-5 #second', { opacity: 0, duration: 1 }, 4);
scene5.to('.section-5 #text-1', { opacity: 0, duration: 1 }, 4);
scene5.to('.section-5 #third', { opacity: 1, duration: 1 }, 5);

scene5.to('.section-5 #third', { opacity: 0, duration: 1 }, 6);
scene5.to('.section-5 #forth', { opacity: 1, duration: 1 }, 7);

scene5.to('.section-5 #forth', { opacity: 0, duration: 1 }, 8);
scene5.to('.section-5 #fifth', { opacity: 1, duration: 1 }, 9);

scene5.to('.section-5 #fifth', { opacity: 0, duration: 1 }, 10);
scene5.to('.section-5 #six', { opacity: 1, duration: 1 }, 11);

scene5.to('.section-5 #six', { opacity: 0, duration: 1 }, 12);
scene5.to('.section-5 #seven', { opacity: 1, duration: 1 }, 13);

scene5.to('.section-5 #seven', { opacity: 0, duration: 1 }, 14);
