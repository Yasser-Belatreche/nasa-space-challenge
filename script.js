gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = () => {
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
