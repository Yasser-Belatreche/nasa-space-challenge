gsap.registerPlugin(ScrollTrigger);
let speed = 200;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: '.scrollElement',
    start: 'top top',
    end: '45% 100%',
    scrub: 3,
});

scene1.fromTo('#h1-101', 1, { y: 5 * speed }, { y: -5 * speed }, 0);
scene1.to('#h1-101', 1, { y: 2 * speed, x: 2 * speed }, 0);
scene1.to('#h1-101', 2, { y: -2 * speed, x: 1 * speed }, 1);
// scene1.to('#h1-101', { y: 2 * speed, x: 2 * speed }, 0.5);
// scene1.to('#h1-101', { y: 2 * speed, x: 10 * speed }, 1);
scene1.fromTo('#h1-10', 3, { scale: 0 }, { scale: 1.6 }, 2);
scene1.fromTo('#h1-11', 3, { scale: 0, rotate: 0 }, { scale: 0.4, rotate: 360 }, 2);
scene1.to('#h1-11', { y: 1.2 * speed, x: 2 * speed, opacity: 100 }, 2.07);
scene1.to('#h1-10', { y: 2 * speed, x: 2 * speed, opacity: 100 }, 2.07);
scene1.to('#h1-10', { y: -2 * speed }, 3);
scene1.to('#h1-11', { scale: 0.4 }, 3);
scene1.fromTo('#h1-11', 3, { opacity: 0, scale: 0.6, rotate: 0 }, { scale: 0.2, rotate: 360 }, 2);
scene1.to('#h1-11', { y: 0.3 * speed, x: 1.7 * speed, opacity: 100 }, 2);
scene1.fromTo('#h1-12', 4, { y: 1.5 * speed, x: -2 * speed }, {}, 2);
scene1.to('#h1-12', { y: 1.5 * speed, x: 1.8 * speed, opacity: 100 }, 3.5);
scene1.fromTo('#h1-11', 3, { rotate: 0 }, { scale: 0.9 }, 3.9);
scene1.to('#h1-11', { y: 1.8 * speed, x: 0, opacity: 100 }, 4.5);
scene1.fromTo('#h1-12', 3, { opacity: 1 }, { opacity: 0 }, 4.4);
scene1.fromTo(
    '#h1-13',
    3,
    { y: 1.2 * speed, x: 1.6 * speed },
    { y: 1.2 * speed, x: 1.6 * speed },
    4.9,
);
scene1.fromTo('#h1-13-3', 4.9, { opacity: 0 }, { opacity: 1 }, 5.3);
scene1.fromTo('#h1-13-2', 5.4, { opacity: 0 }, { opacity: 1 }, 5.7);
scene1.fromTo('#h1-13-1', 5.8, { opacity: 0 }, { opacity: 1 }, 6.1);
// scene1.to('#h1-13', { y: 1.2 * speed, x: 1.6 * speed }, 2.4);
scene1.to('#h1-13', { opacity: 1 }, 4.9);
//reset scrollbar position after refresh

// scene1.fromTo('#h1-13', 4.8, { opacity: 1 }, { opacity: 0 }, 4.8);
// scene1.fromTo('#h1-13', 7.3, { y: 1.8 * speed, x: 0 }, { y: 10 * speed, x: 0 }, 7.3);
scene1.to('#h1-13', { y: 10 * speed, x: 0, opacity: 0 }, 7.3);
scene1.to('#h1-11', { y: 10 * speed, x: 0, opacity: 0 }, 7.3);
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = 'Exit Fullscreen';
    } else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = 'Go Fullscreen';
    }
});
