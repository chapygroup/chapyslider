chapyslider
===========

USAGE:

1. DOM structure:
(you can have multi instance of slider in 1 page)
<div class="chapyslider">
			<div class="cp-slide">
				<img src="http://lorempixel.com/800/300/cats" />
			</div>

			<div class="cp-slide">
				<img src="http://lorempixel.com/800/300/sports" />
			</div>

			<div class="cp-slide">
				<img src="http://lorempixel.com/800/300/food" />
			</div>
</div>

2. Init:
$(".chapyslider").chapyslider();

3. Default setting:
(you can overwrite all as usual way)
 	var defaultOptions = {
 		autoPlay: true,
 		interval: 1000,
 		duration: "0.5s", //transition duration
 		effect: "fade", // only 1 support so far
 		width: "800px", // width of slider
 		height: "300px"	// heigh of slider	
 	};
