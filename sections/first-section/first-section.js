gsap.registerPlugin(ScrollTrigger);

const speed = 100;

const scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: '.scrollDiv',
    start: 'top top',
    end: '40% 100%',
    scrub: 3,
});

scene1.set('body', { background: 'linear-gradient(180deg, #0d1433 0%, #0e1e61 100%)' });

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

scene1.to('.section-1 #first-earth', { x: 150, scale: 2 }, 4.3);
scene1.to('.section-1 #clouds', { x: -450, scale: 0.6 }, 4.3);
scene1.to('.section-1 #text-4', { y: -150 }, 4.3);

scene1.to('.section-1 #first-earth', { y: -1200 }, 4.8);
scene1.to('.section-1 #clouds', { opacity: 0, scale: 0.3 }, 4.8);
scene1.to('.section-1 #text-4', { y: -600 }, 4.8);
