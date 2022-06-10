/////////////////////////////  VIDEO PLAYER /////////////////////////////
  // const player = document.getElementById("player");

  const playerFooterTop = document.getElementById("player--footer__top");
  playerFooterTop.innerHTML = `
<div class="player--footer">
          <div class="progress">
            <label for="progress" hidden>video length bar</label>
            <input
              type="range"
              name="progressBar"
              id="progress"
              class="progress__bar"
              value="50"
              min="0"
              max="100"
            />
            <div class="progress__bar--thumb">
              <div class="progress__bar--thumb-btn"></div>
            </div>
            <div class="progress__bar--timer">
              <video class="mini_video" src="/public/video3.mp4"></video>
              <span></span>
            </div>
            <div class="progress__bar--filled-current"></div>
            <div class="progress__bar--filled-loaded"></div>
          </div>
          <div class="player--time">
            <span>00:00</span>
            <span>00:00</span>
          </div>
          <div class="player--option">
            <!-- <svg class="player--option__volume">
               <use xlink:href="assets/svg/sprite.svg#icon-volume_up"></use>
             </svg> -->
			<svg class="player--option__volume" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<title>volume_up</title>
				<path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
			</svg>

            <div class="volume__slider">
              <label for="vol" hidden>Volume Slider</label>
              <input
                type="range"
                class="volume__bar"
                id="vol"
                name="volume"
                value="1"
                min="0"
                max="1"
                step="0.01"
              />
            </div>

           <!--
		    <svg class="player--option__play">
              <use xlink:href="assets/svg/sprite.svg#icon-play"></use>
            </svg>

            <svg class="player--option__skip" data-skip="-10">
              <use xlink:href="assets/svg/sprite.svg#icon-replay_10"></use>
            </svg>

            <svg class="player--option__skip" data-skip="10">
              <use xlink:href="assets/svg/sprite.svg#icon-forward_10"></use>
            </svg>

            <svg class="player--option__fullscreen">
              <use xlink:href="assets/svg/sprite.svg#icon-fullscreen"></use>
            </svg>
			-->
			<svg class="player--option__play" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<title>play</title>
				<path d="M5.541 2.159c-0.153-0.1-0.34-0.159-0.541-0.159-0.552 0-1 0.448-1 1v18c-0.001 0.182 0.050 0.372 0.159 0.541 0.299 0.465 0.917 0.599 1.382 0.3l14-9c0.114-0.072 0.219-0.174 0.3-0.3 0.299-0.465 0.164-1.083-0.3-1.382zM6 4.832l11.151 7.168-11.151 7.168z"></path>
			</svg>

			<svg class="player--option__skip" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-skip="-10">
				<title>replay_10</title>
				<path d="M13.219 15.188q0 0.328 0.469 0.328 0.234 0 0.328-0.094l0.188-0.234q0.094-0.188 0.094-0.281v-2.016q-0.094-0.188-0.094-0.281t-0.211-0.211-0.305-0.117q-0.141 0-0.281 0.141l-0.188 0.188q-0.141 0.188-0.141 0.281v2.016q0.141 0.188 0.141 0.281zM15.188 14.203q0 0.609-0.094 0.797l-0.281 0.609q-0.328 0.281-0.516 0.281-0.094 0-0.305 0.047t-0.305 0.047q-0.422 0-0.609-0.094-0.094-0.047-0.234-0.141t-0.234-0.141q-0.422-0.234-0.422-1.406v-0.703q0-0.609 0.094-0.797l0.328-0.609q0.281-0.281 0.469-0.281 0.094 0 0.305-0.047t0.305-0.047q0.422 0 0.609 0.094 0.094 0.047 0.258 0.141t0.258 0.141 0.281 0.609q0.094 0.281 0.094 0.797v0.703zM10.922 15.984h-0.938v-3.281l-0.984 0.281v-0.703l1.781-0.563h0.141v4.266zM12 5.016q3.328 0 5.672 2.344t2.344 5.625q0 3.328-2.367 5.672t-5.648 2.344-5.648-2.344-2.367-5.672h2.016q0 2.484 1.781 4.242t4.219 1.758 4.219-1.758 1.781-4.242-1.781-4.242-4.219-1.758v4.031l-5.016-5.016 5.016-5.016v4.031z"></path>
			</svg>

			<svg class="player--option__skip" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-skip="10">
				<title>forward_10</title>
				<path d="M13.219 15.188q0 0.328 0.469 0.328 0.234 0 0.328-0.094l0.188-0.234q0.094-0.188 0.094-0.281v-2.016q-0.094-0.188-0.094-0.281t-0.211-0.211-0.305-0.117q-0.141 0-0.281 0.141l-0.188 0.188q-0.141 0.188-0.141 0.281v2.016q0.141 0.188 0.141 0.281zM15.094 14.203q0 0.609-0.094 0.797l-0.281 0.609q-0.328 0.281-0.516 0.281-0.094 0-0.305 0.047t-0.305 0.047q-0.422 0-0.609-0.094-0.094-0.047-0.234-0.141t-0.234-0.141q-0.422-0.234-0.422-1.406v-0.703q0-0.609 0.094-0.797l0.328-0.609q0.281-0.281 0.469-0.281 0.094 0 0.305-0.047t0.305-0.047q0.422 0 0.609 0.094 0.094 0.047 0.258 0.141t0.258 0.141 0.281 0.609q0.094 0.281 0.094 0.797v0.703zM10.922 15.984h-0.938v-3.281l-0.984 0.281v-0.703l1.781-0.563h0.141v4.266zM3.984 12.984q0-3.281 2.344-5.625t5.672-2.344v-4.031l5.016 5.016-5.016 5.016v-4.031q-2.438 0-4.219 1.758t-1.781 4.242 1.781 4.242 4.219 1.758 4.219-1.758 1.781-4.242h2.016q0 3.328-2.367 5.672t-5.648 2.344-5.648-2.344-2.367-5.672z"></path>
			</svg>

			<svg class="player--option__fullscreen" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<title>fullscreen</title>
				<path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
			</svg>

          </div>
        </div>
`;
///////////////////  Getting DOM Elements //////////////////

  const player = document.querySelector(".player");
  const video = player.querySelector(".player--video");
  const progress = player.querySelector(".progress__bar");
  const playerControl = player.querySelector(".player--footer");
  const progressBarCurrent = player.querySelector(
    ".progress__bar--filled-current",
  );
  const progressBarLoaded = player.querySelector(
    ".progress__bar--filled-loaded",
  );
  const progressThumb = player.querySelector(".progress__bar--thumb");
  const progressTime = player.querySelector(".progress__bar--timer");
  const selector = player.querySelector(".progress");
  const currTime = player.querySelector(".player--time span:first-of-type");
  const durTime = player.querySelector(".player--time span:last-of-type");
  const volumeBar = player.querySelector(".volume__bar");
  const volumeTab = player.querySelector(".player--option__volume");
  const playBtn = player.querySelector(".player--option__play");
  const fwdBtn = player.querySelector('[data-skip="10"]');
  const bwdBtn = player.querySelector('[data-skip="-10"]');
  const fullscreenBtn = player.querySelector(".player--option__fullscreen");
  const playerHeading = player.querySelector(".player--heading");

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
    <title>play</title>
    <path d="M5.541 2.159c-0.153-0.1-0.34-0.159-0.541-0.159-0.552 0-1 0.448-1 1v18c-0.001 0.182 0.050 0.372 0.159 0.541 0.299 0.465 0.917 0.599 1.382 0.3l14-9c0.114-0.072 0.219-0.174 0.3-0.3 0.299-0.465 0.164-1.083-0.3-1.382zM6 4.832l11.151 7.168-11.151 7.168z"></path>
    `;
    } else {
      playBtn.innerHTML = `
    <title>pause</title>
    <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
    `;
    }
  }

  function volumeMuteHandler() {
    video.muted = !video.muted;
  }

  function toggleMuteHandler() {
    if (video.muted) {
      volumeTab.innerHTML = `
    <title>volume_off</title>
    <path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
    `;
    } else {
      volumeTab.innerHTML = `
    <title>volume_up</title>
    <path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
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
      currSec = "0" + currSec;
    }
    if (currMin < 10) {
      currMin = "0" + currMin;
    }
    if (durSec < 10) {
      durSec = "0" + durSec;
    }

    currTime.innerHTML = `${currMin}:${currSec}`;
    durTime.innerHTML = `${durMin}:${durSec}`;

    localStorage.setItem("videoTime", video.currentTime);
  }

  function volumeSliderHandler() {
    video[this.name] = this.value;
    video.muted = false;
    toggleMuteHandler();
    if (video[this.name] === 0) {
      volumeMuteHandler();
      toggleMuteHandler();
    }
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
    playerHeading.classList.add("active");
    let timeout;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(mouseStopHeader, 8000);
  };

  const mouseStopHeader = () => {
    playerHeading.classList.remove("active");
  };

  function progressTimerHandler(e) {
    progressTime.style.left = `${e.offsetX}px`;
    if (
      progressTime.getBoundingClientRect().x +
        progressTime.getBoundingClientRect().width >=
      video.getBoundingClientRect().x + video.getBoundingClientRect().width
    ) {
      progressTime.style.left = `${
        video.offsetWidth - progressTime.offsetWidth / 2
      }px`;
      console.log(progress.offsetWidth);
    }
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    let scrubMin = Math.floor(scrubTime / 60);
    let scrubSec = Math.floor(scrubTime - scrubMin * 60);

    if (scrubSec < 10) {
      scrubSec = "0" + scrubSec;
    }
    if (scrubMin < 10) {
      scrubMin = "0" + scrubMin;
    }
    progressTime.querySelector("span").innerHTML = `${scrubMin}:${scrubSec}`;
    progressTime.querySelector("video").currentTime = scrubTime;
  }

  function buffered() {
    let range = 0;
    let bf = this.buffered;
    let time = this.currentTime;
    if (this.readyState === 4) {
      while (!(bf.start(range) <= time && time <= bf.end(range))) {
        range += 1;
      }
      let loadStartPercentage = bf.start(range) / this.duration;
      let loadEndPercentage = bf.end(range) / this.duration;
      let loadPercentage = (loadEndPercentage - loadStartPercentage) * 100;
      progressBarLoaded.style.width = `${loadEndPercentage * 100}%`;
    }
  }

  ////////////////// Listening to the Events /////////////////
  fullscreenBtn.addEventListener("click", fullscreen);

  document.addEventListener("keyup", (e) => {
    if (e.key === "f" || e.key === "F") {
      console.log("F is fired!");
      fullscreen();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      skipFwdHandler();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      skipBwdHandler();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      playHandler();
    }
  });

  volumeBar.addEventListener("wheel", (e) => {
    const value = -(e.deltaY / 12500);
    if (0.01 < volumeBar.value <= 1) {
      volume = +volumeBar.value + +value;
      volumeBar.value = volume.toFixed(2);
      video.volume = volumeBar.value;

      video.muted = false;
      toggleMuteHandler();
      if (video.volume <= 0) {
        volumeMuteHandler();
        toggleMuteHandler();
      }
    }
  });

  video.addEventListener("dblclick", fullscreen);

  video.addEventListener("click", playHandler);

  video.addEventListener("play", toggleBtnHandler);

  video.addEventListener("pause", toggleBtnHandler);

  video.addEventListener("timeupdate", progressHandler);

  video.addEventListener("mousemove", playerAddHeadingHandler);

  playBtn.addEventListener("click", playHandler);

  volumeTab.addEventListener("click", volumeMuteHandler);

  volumeTab.addEventListener("click", toggleMuteHandler);

  volumeBar.addEventListener("change", volumeSliderHandler);

  fwdBtn.addEventListener("click", skipFwdHandler);

  bwdBtn.addEventListener("click", skipBwdHandler);

  selector.addEventListener("click", scrub);

  progressThumb.addEventListener("change", scrub);

  progressBarCurrent.addEventListener("mousemove", progressTimerHandler);

  progress.addEventListener("mousemove", progressTimerHandler);

  video.addEventListener("progress", buffered);

  volumeBar.addEventListener("drag", (e) => {
    console.log(e);
  });

