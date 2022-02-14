const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

const togglePlay = () => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

const skip = (num) => {
    video.currentTime += parseFloat(num);
}

const handleRangeUpdate = (e) => {
    video[e.target.name] = e.target.value;
}

const handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', () => togglePlay());
toggle.addEventListener('click', () => togglePlay());

video.addEventListener('play', () => toggle.innerHTML = "||");
video.addEventListener('pause', () => toggle.innerHTML = "►");
video.addEventListener('timeupdate', () => handleProgress());

skipButtons.forEach(item => item.addEventListener('click', (e) => skip(e.target.dataset.skip)));

let mousedown = false;
ranges.forEach(item => item.addEventListener('change', (e) => handleRangeUpdate(e)));
ranges.forEach(item => item.addEventListener('mousemove', (e) => {
    if (mousedown) handleRangeUpdate(e);
}));
ranges.forEach(item => item.addEventListener('mousedown', () => mousedown = true));
ranges.forEach(item => item.addEventListener('mouseup', () => mousedown = false));

let md = false
progress.addEventListener('click', e => scrub(e));
progress.addEventListener('mousedown', () => md = true);
progress.addEventListener('mouseup', () => md = false);
progress.addEventListener('mousemove', e => {
    if (md) scrub(e);
});

fullscreen.addEventListener('click', () => {
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
});