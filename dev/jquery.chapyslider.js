;(function($){
 $.fn.chapyslider = function(options){
 	var constants = {
 		slideContainer: "cp-slidercontainer",
 		slideItem: "cp-slide",

 	};
 	var defaultOptions = {
 		autoPlay: true,
 		interval: 5000,
 		effect: "fade", 		
 	};
 	var slider = {
 				timer: 0,
 				index: 0,
 				indicator: [],
 				firstNav:"",
 				secondNav: "",
 				};

 	var setting = $.extend(true,{}, defaultOptions, options), 
 		self = $(this),
 		sliders = [];
 		
 	var domRestructering = function(){
 		self.each(function(index, val) {
 			var slide = $(val);
 			var container = $("<div></div>").addClass(constants.slideContainer);
 			slide.children().appendTo(container);
 			slide.append(container);

 			var slideItemNumber = container.find("." + constants.slideItem).length;
 		});
 	};

 	var evenBinding = function(){

 	};

 	var initAll = function(){
 		domRestructering();
 	};

 	initAll();
 };
})(jQuery);