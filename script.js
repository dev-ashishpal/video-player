/////////////////////////////  VIDEO PLAYER /////////////////////////////

///////////////////  Getting DOM Elements //////////////////
const player = document.querySelector('.player');
const video = player.querySelector('.player--video');
const progress = player.querySelector('.progress__bar');
const playerControl = player.querySelector('.player--footer');
const progressBarCurrent = player.querySelector('.progress__bar--filled-current');
const progressBarLoaded = player.querySelector('.progress__bar--filled-loaded');
const progressThumb = player.querySelector('.progress__bar--thumb');
const progressTime = player.querySelector('.progress__bar--timer');
const selector = player.querySelector('.progress');
const currTime = player.querySelector('.player--time span:first-of-type');
const durTime = player.querySelector('.player--time span:last-of-type');
const volumeBar = player.querySelector('.volume__bar');
const volumeTab = player.querySelector('.player--option__volume');
const playBtn = player.querySelector('.player--option__play');
const fwdBtn = player.querySelector('[data-skip="10"]');
const bwdBtn = player.querySelector('[data-skip="-10"]');
const fullscreenBtn = player.querySelector('.player--option__fullscreen');
const playerHeading = player.querySelector('.player--heading');


//////////////////// Storing CurrentTime to the local storage /////////////////////
let videoTime = localStorage.getItem("videoTime");

video.currentTime = videoTime;


/////////////////// Calling Functions //////////////////
function fullscreen() {
    if (player.requestFullscreen) {
        player.requestFullscreen();
    }
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function playHandler() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleBtnHandler() {
    if (video.paused) {
        playBtn.innerHTML = `
    <use xlink:href="svg/sprite.svg#icon-play"></use>
    `;
    } else {
        playBtn.innerHTML = `
    <use xlink:href="svg/sprite.svg#icon-pause"></use>
    `;
    }
}

function volumeMuteHandler() {
    video.muted = !video.muted;
}

function toggleMuteHandler() {
    if (video.muted) {
        volumeTab.innerHTML = `
    <use xlink:href="svg/sprite.svg#icon-volume_off"></use>
    `;
    } else {
        volumeTab.innerHTML = `
    <use xlink:href="svg/sprite.svg#icon-volume_up"></use>
    `;
    }
}

function progressHandler() {
    const percent = (video.currentTime / video.duration) * 100;
   // console.log('current percent => ' +percent);
    progressBarCurrent.style.width = `${percent}%`;
    progressThumb.style.left = `${percent}%`;
    progressThumb.transform = `translateX(-${percent}%)`;

    let currMin = Math.floor(video.currentTime / 60);
    let currSec = Math.floor(video.currentTime - currMin * 60);
    let durMin = Math.floor(video.duration / 60);
    let durSec = Math.floor(video.duration - durMin * 60);

    if (currSec < 10) {
        currSec = '0' + currSec;
    }
    if (currMin < 10) {
        currMin = "0" + currMin;
    }
    if (durSec < 10) {
        durSec = '0' + durSec;
    }

    currTime.innerHTML = `${currMin}:${currSec}`;
    durTime.innerHTML = `${durMin}:${durSec}`;

    localStorage.setItem("videoTime", video.currentTime);
}

function volumeSliderHandler() {
    video[this.name] = this.value;
}

function skipFwdHandler() {
    video.currentTime += parseFloat(fwdBtn.dataset.skip);
}

function skipBwdHandler() {
    video.currentTime += parseFloat(bwdBtn.dataset.skip);
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(scrubTime, e.offsetX);
}

const playerAddHeadingHandler = () => {
    playerHeading.classList.add('active');
    let timeout;
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(mouseStopHeader, 8000);
}

const mouseStopHeader = () => {
    playerHeading.classList.remove('active');
    // console.log('heading-removed');
}

function progressTimerHandler(e) {
    progressTime.style.left = `${e.offsetX}px`;
    // console.log(progressTime.style.left);
    if( progressTime.getBoundingClientRect().x + progressTime.getBoundingClientRect().width >= video.getBoundingClientRect().x + video.getBoundingClientRect().width ) {
        progressTime.style.left = `${ video.offsetWidth - (progressTime.offsetWidth / 2)}px`;
        console.log(progress.offsetWidth);
    }
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    let scrubMin = Math.floor(scrubTime / 60);
    let scrubSec = Math.floor(scrubTime - scrubMin * 60);

    if (scrubSec < 10) {
        scrubSec = '0' + scrubSec;
    }
    if (scrubMin < 10) {
        scrubMin = "0" + scrubMin;
    }
    progressTime.querySelector('span').innerHTML = `${scrubMin}:${scrubSec}`;
    progressTime.querySelector('video').currentTime = scrubTime;
}

function buffered() {
    let range = 0;
    let bf = this.buffered;
    let time = this.currentTime;
	if(this.readyState === 4) {
    while(!(bf.start(range) <= time && time<= bf.end(range))) {
        range += 1;
    }
    let loadStartPercentage = bf.start(range) / this.duration;
    let loadEndPercentage = bf.end(range) / this.duration;
    let loadPercentage = (loadEndPercentage - loadStartPercentage) *100;
    progressBarLoaded.style.width = `${loadEndPercentage *100}%`;
	}
}

////////////////// Listening to the Events /////////////////
fullscreenBtn.addEventListener('click', fullscreen);

document.addEventListener('keyup', (e) => {
    if (e.key === 'f' || e.key === 'F') {
		console.log('F is fired!');
        fullscreen();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        skipFwdHandler();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") {
        skipBwdHandler();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        playHandler();
    }
});

video.addEventListener('dblclick', fullscreen);

video.addEventListener('click', playHandler);

video.addEventListener('play', toggleBtnHandler);

video.addEventListener('pause', toggleBtnHandler);

video.addEventListener('timeupdate', progressHandler);

video.addEventListener('mousemove', playerAddHeadingHandler);

playBtn.addEventListener('click', playHandler);

volumeTab.addEventListener('click', volumeMuteHandler);

volumeTab.addEventListener('click', toggleMuteHandler);

volumeBar.addEventListener('change', volumeSliderHandler);

fwdBtn.addEventListener('click', skipFwdHandler);

bwdBtn.addEventListener('click', skipBwdHandler);

selector.addEventListener('click', scrub);

progressThumb.addEventListener('change', scrub);

progressBarCurrent.addEventListener('mousemove', progressTimerHandler);

progress.addEventListener('mousemove', progressTimerHandler);

video.addEventListener('progress', buffered)


volumeBar.addEventListener('drag', (e) => {
    console.log(e)
})