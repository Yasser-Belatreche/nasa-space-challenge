const scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: '.scrollDiv',
    start: 'top top',
    end: '25% 100%',
    scrub: 3,
});

scene1.to('.section-1 #text-1', { y: -600 }, 0);
scene1.to('.section-1 #first-earth', { scale: 1.5, duration: 2 }, 0);
scene1.to('.section-1 #text-2', { y: -100 }, 0.2);

scene1.to('.section-1 #text-2', { y: -600 }, 1);
scene1.to('.section-1 #first-earth', { x: 450, y: 700, scale: 1.6, duration: 1 }, 1);
scene1.to('.section-1 #clouds', { opacity: 1, duration: 0.5, scale: 0.4 }, 1.8);

scene1.to('.section-1 #outer-circles', { opacity: 1, duration: 0.5 }, 2);
scene1.to('.section-1 #text-3', { y: -200 }, 2);

scene1.to('.section-1 #text-3', { y: -600 }, 3);
scene1.to('.section-1 #outer-circles', { opacity: 0, duration: 0.5 }, 3);

scene1.to('.section-1 #first-earth', { x: 150, scale: 2 }, 3.5);
scene1.to('.section-1 #clouds', { x: -450, scale: 0.6 }, 3.5);
scene1.to('.section-1 #text-4', { y: -150 }, 3.5);

scene1.to('.section-1 #first-earth', { y: -1800, opacity: 0 }, 5);
scene1.to('.section-1 #clouds', { opacity: 0, scale: 0.3 }, 5);
scene1.to('.section-1 #text-4', { y: -600 }, 5);
