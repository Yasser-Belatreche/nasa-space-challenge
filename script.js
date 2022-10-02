gsap.registerPlugin(ScrollTrigger);
let speed = 200;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: '.scrollElement',
    start: '40% top',
    end: '100% 100%',
    scrub: 3,
});
scene1.to('#h1-1', { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: 'power1.in' }, 0);
scene1.to('#h1-2', { y: 2.6 * speed, x: -0.6 * speed, ease: 'power1.in' }, 0);
scene1.to('#h1-3', { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
scene1.to('#h1-4', { y: 3 * speed, x: 1 * speed }, 0.03);
scene1.to('#h1-5', { y: 2 * speed, x: 1 * speed }, 0.03);
scene1.to('#h1-6', { y: 2.3 * speed, x: -2.5 * speed }, 0);
scene1.to('#h1-7', { y: 5 * speed, x: 1.6 * speed }, 0);
scene1.to('#h1-8', { y: 3.5 * speed, x: 0.2 * speed }, 0);
scene1.to('#h1-9', { y: -10 * speed }, 0);
scene1.fromTo('#h1-10', 1, { scale: 0 }, { scale: 1 }, 0);
scene1.fromTo('#h1-11', 1, { scale: 0, rotate: 0 }, { scale: 0.2, rotate: 360 }, 0);
scene1.to('#h1-11', { y: 1.2 * speed, x: 2 * speed, opacity: 100 }, 0.07);
scene1.to('#h1-10', { y: 2 * speed, x: 2 * speed, opacity: 100 }, 0.07);
scene1.to('#h1-10', { y: -2 * speed }, 1);
scene1.to('#h1-11', { scale: 0.4 }, 1);
scene1.fromTo('#h1-11', 1, { scale: 0, rotate: 0 }, { scale: 0.2, rotate: 360 }, 0);
scene1.to('#h1-11', { y: 0.3 * speed, x: 1.7 * speed, opacity: 100 }, 1);
scene1.fromTo('#h1-12', 1, { y: 1.5 * speed, x: -2 * speed }, {}, 0);
scene1.to('#h1-12', { y: 1.5 * speed, x: 1.8 * speed, opacity: 100 }, 1.5);
scene1.fromTo('#h1-11', 1, { rotate: 0 }, { scale: 0.9 }, 1.9);
scene1.to('#h1-11', { y: 1.8 * speed, x: 0, opacity: 100 }, 2.5);
scene1.fromTo('#h1-12', 1, { opacity: 1 }, { opacity: 0 }, 2.4);
scene1.fromTo(
    '#h1-13',
    1,
    { y: 1.2 * speed, x: 1.6 * speed },
    { y: 1.2 * speed, x: 1.6 * speed },
    2.9,
);
scene1.fromTo('#h1-13-3', 2.9, { opacity: 0 }, { opacity: 1 }, 3.3);
scene1.fromTo('#h1-13-2', 3.4, { opacity: 0 }, { opacity: 1 }, 3.7);
scene1.fromTo('#h1-13-1', 3.8, { opacity: 0 }, { opacity: 1 }, 4.1);
// scene1.to('#h1-13', { y: 1.2 * speed, x: 1.6 * speed }, 2.4);
scene1.to('#h1-13', { opacity: 1 }, 2.9);
//reset scrollbar position after refresh

// scene1.fromTo('#h1-13', 4.8, { opacity: 1 }, { opacity: 0 }, 4.8);
scene1.fromTo('#h1-13', 5.3, { y: 1.8 * speed, x: 0 }, { y: 10 * speed, x: 0 }, 5.3);

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
