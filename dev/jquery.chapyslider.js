(function ($) {
    $.fn.chapyslider = function (options) {
        var constants = {
            slideContainer: "cp-slidercontainer",
            slideItem: "cp-slide",
            slideNavigator: "cp-navigator",
            slideNavigatorActive: "active",
            slideActive: "cp-active"
        };
        var defaultOptions = {
            autoPlay: true,
            interval: 1000,
            duration: "0.5s",
            effect: "fade",
            width: "800px",
            height: "300px"
        };

        var setting = $.extend(true, {}, defaultOptions, options),
            self = $(this),
            sliders = [];

        var sliderObj = {
            dom: null,
            timer: 0,
            index: 0,
            indicator: [],
            slideNo: 0,
            firstNav: "",
            secondNav: "",
        };
        var slideShow = {
            show: function (sliderIndex, slideIndex) {
                switch (setting.effect) {
                case "fade":

                    sliders[sliderIndex].dom.find("." + constants.slideNavigator + "> li").removeClass(constants.slideNavigatorActive).eq(slideIndex).addClass(constants.slideNavigatorActive);
                    sliders[sliderIndex].dom.find("." + constants.slideItem).css("opacity", "0").eq(slideIndex).css("opacity", "1");
                    if (slideIndex === sliders[sliderIndex].slideNo - 1) {
                        sliders[sliderIndex].index = 0;
                    } else {
                        sliders[sliderIndex].index++;
                    }
                    break;
                }
            },
            play: function (sliderIndex) {
                sliders[sliderIndex].timer = setInterval(function () {
                    slideShow.show(sliderIndex, sliders[sliderIndex].index);
                }, setting.interval);
            },
            stop: function (sliderIndex) {
                clearInterval(sliders[sliderIndex].timer);
            }
        };

        var CSS3vendors = ['-moz-', '-webkit-', '-o-', '-ms-', '-khtml-', ''];
        var setCSS3Style = function (el, prop, val) {
            $.each(CSS3vendors, function (i, vendor) {
                var property = vendor + prop;
                if (property in el[0].style) {
                    el.css(property, val);
                }
            });
        };
        var imagesLoadedCallback = function () {
                var loaded = 0,
                    total = 0;
                $.each(sliders, function (i, slider) {
                    var images = slider.dom.find('img');
                    total = images.length;
                    images.each(function () {
                        $(this).on('load', function () {
                            loaded += 1;
                            if (loaded === total) {
                                prepareStage();
                            }
                        });
                    });
                });
            },
            domRestructering = function () {
                self.each(function (index, val) {
                    // create container for all slides inside
                    var slide = $(val),
                        slideInstance = sliderObj,
                        container = $("<div></div>").addClass(constants.slideContainer);
                    switch (setting.effect) {
                    case "fade":
                        container.addClass('cp-fading');
                        break;
                    }
                    slide.css({
                        "width": setting.width,
                        "height": setting.height
                    });
                    slide.children().appendTo(container);

                    // add slide navigator
                    var slideItemNumber = container.find("." + constants.slideItem).length,
                        slidernavigator = $("<ul></ul>").addClass(constants.slideNavigator);
                    for (var i = 0; i < slideItemNumber; i++) {
                        var snav = $("<li>" + (i + 1) + "</li>");
                        setCSS3Style(snav, "transition", "all " + setting.duration);
                        slideInstance.indicator.push(snav);
                        slidernavigator.append(snav);
                    }
                    slide.append(container, slidernavigator);
                    slidernavigator.hide();
                    slideInstance.slideNo = slideItemNumber;
                    slideInstance.dom = slide;
                    sliders.push(slideInstance);
                });
                imagesLoadedCallback();
            },
            prepareStage = function () {
                var windowW = $(window).width();

                switch (setting.effect) {
                case 'fade':
                    $.each(sliders, function (i, slider) {
                        var imgH = slider.dom.find('img').height(),
                            imgW = slider.dom.find('img').width(),
                            ratio = 1;
                        if (imgH > imgW) {
                            ratio = (imgW / imgH) * 100;
                        } else {
                            ratio = (imgH / imgW) * 100;
                        }

                        slider.dom.css({
                            'width': '100%',
                            'height': 'auto'
                        }).find('.' + constants.slideContainer).css({
                            'padding-top': ratio + '%'
                        });
                    });
                    break;
                }

                $.each(sliders, function (i, slider) {
                    slider.dom.find('.' + constants.slideNavigator).show();
                    slideShow.show(i, 0);
                    if (setting.autoPlay) {
                        slideShow.play(i);
                    }
                });

                eventBinding();
            };

        var eventBinding = function () {
            // add hover event and css transition for all slide
            $.each(sliders, function (i, slider) {
                slider.dom.hover(function () {
                    slideShow.stop(i);
                }, function () {
                    slideShow.play(i);
                });
                slider.dom.find("." + constants.slideItem).each(function (index, el) {
                    setCSS3Style($(el), "transition", "all " + setting.duration);
                });
            });

            $.each(sliders, function (i, slide) {
                $.each(sliders[i].indicator, function (j, nav) {
                    nav.on("click", function () {
                        slideShow.stop(i);
                        slideShow.show(i, j);
                        if (setting.autoPlay) {
                            slideShow.play(i);
                        }
                    });
                });
            });
        };

        var initAll = function () {
            domRestructering();
        };

        initAll();
    };
})(jQuery);