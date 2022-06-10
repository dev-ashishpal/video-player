// const player = document.getElementById('player');
// const playerFooterTop = document.createElement('div');
// playerFooterTop.classList.add("player--footer__top");
const playerFooterTop = document.getElementById('player--footer__top');
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
            <svg class="player--option__volume">
              <use xlink:href="assets/svg/sprite.svg#icon-volume_up"></use>
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
          </div>
        </div>
`;

// player.appendChild(playerFooterTop);