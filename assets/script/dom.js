// const player = document.getElementById('player');
// const playerFooterTop = document.createElement('div');
// playerFooterTop.classList.add("player--footer__top");
export const dom = () => {
  const player = document.getElementById("player");

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
};

// player.appendChild(playerFooterTop);
