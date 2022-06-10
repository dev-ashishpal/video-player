# Custom Video Player
This is a customizable Video Player with Pure JavaScript.
This Video Player can be easily customized and used in any website.

You can preview the Demo here:
[https://unpkg.com/custom-html-player@1.0.3/index.html+](https://unpkg.com/custom-html-player@1.0.2/index.html)

### Features of Player
1. Play/Pause
2. Forward and Backward
3. FullScreen
4. Volume Slider and Mute Button
5. Played time Slider
6. Buffered time Slider
7. Mini Video Preview when hover on Slider (just like in *youtube*)

## How to access this package in your local project
1. Include CSS and JavaScript CDN into your index.html file.
```
<!-- CSS CDN -->
	<link rel="stylesheet" href="https://unpkg.com/custom-html-player@1.0.3/assets/styles/style.css">
<!-- JS CDN -->
	<script defer src="https://unpkg.com/custom-html-player@1.0.3/assets/script/index.js"></script>
```
2. Inside your HTML file write the code given below.
```
<div class="player" id="player" style="width: 1000px; height: 500px">
      <video
        src="**video file source**"
        class="player--video"
        poster="**thumbnail file source**"
        preload="metadata"
      >
        Your browser doesn't support Video File.
      </video>
      <h2 class="player--heading">**Title of the Video**</h2>
      <div class="options" id="options"></div>
    </div>
```
You can also use place that code inside a div/container and add your own height and width.
