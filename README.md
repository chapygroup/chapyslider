<h1>chapyslider</h1>
===========
<h2>FEATURES:</h2>

- Fade effect
- Slide stop when mouse is hovering
- Multi sliders in 1 page
- Slide contain is controlled and styled by youself.

<h2>USAGE:</h2>

<h3>1. DOM structure:</h3>
```
<div class="chapyslider">
	<div class="cp-slide">
		slide 1 (any contain can be place here)
	</div>

	<div class="cp-slide">
		slide 4 (any contain can be place here)
	</div>

	<div class="cp-slide">
		slide 3 (any contain can be place here)
	</div>
</div>
```
<h3>2. Init:</h3>
$(".chapyslider").chapyslider();

<h3>3. Default setting:</h3>
(you can overwrite all as usual way)
 	var defaultOptions = {
 		autoPlay: true,
 		interval: 1000,
 		duration: "0.5s", //transition duration
 		effect: "fade", // only 1 support so far
 		width: "800px", // width of slider
 		height: "300px"	// heigh of slider	
 	};
<h2>DEMO:</h2>
http://chapygroup.com/demo/chapyslider/dev/index.html
