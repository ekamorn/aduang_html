$(document).ready(function(){

	// navbar mobile controller
	$("#nav-icon").click(function(){
		$(this).toggleClass('open'); 
		if($('.wrap-screen-collection').hasClass('active')) {
			$('.wrap-screen-collection').toggleClass('active');
			$('.big-nav--collection').toggleClass('active');
			$('body').toggleClass('active');
		} else {
			$('.wrap-screen-collection').toggleClass('active');
			$('.big-nav--collection').toggleClass('active');
			$('body').toggleClass('active');
		}
	});

	var checkScreen = $(window).width();

	if(checkScreen < 1260) {
		$('.horo-button').click(function(){
			var horoBtnM = $(this);

			$('.horo-button').removeClass('active')
			$('.horo-head-big-box').removeClass('active');
			$('.main-content--mobile').removeClass('active');
			horoBtnM.addClass('active');
			$('.wrap-screen-collection').toggleClass('active');
			$('.big-nav--collection').toggleClass('active');
			$('body').toggleClass('active');
			$('#nav-icon').toggleClass('open');
			$(horoBtnM.attr('name')).addClass('active');

			// e.preventDefault();
		});
	}
	else {
		$('.horo-button').click(function(){
			var horoBtn = $(this);

			if(!horoBtn.hasClass('active')) {
				$('.horo-button').removeClass('active');
				horoBtn.addClass('active');
				$('.horo-head-big-box').removeClass('active');
				$('.main-content').removeClass('active');
				$(horoBtn.attr('name')).addClass('active');
			}

			// e.preventDefault();
		});
	}

		$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
		
});
