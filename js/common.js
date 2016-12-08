$(document).ready(function(){

	$('.rus a').click(function(){

		$('.eng').slideToggle();

	});

	$('.slider').slick({
		slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 10000,
	  speed: 1000,
	  responsive: [
	  	{
	  		breakpoint: 481,
	  		settings: {
	  			arrows: false,
	  		}
	  	}
	  ]
	});

	$('.reviews-slider').slick({
		responsive: [
	  	{
	  		breakpoint: 321,
	  		settings: {
	  			arrows: false,
	  		}
	  	}
	  ]
	});

	// $('.click-in').click(function(){
	// 	$('.active').css({"background":"red"})
	// });

});