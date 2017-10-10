$(document).ready(function(){

	var windowWidth = $(window).width();

	// Array Pics For Weekly, Monthly and Year
	var arrayPic = ["image/zodiac/1.png", "image/zodiac/2.png", "image/zodiac/3.png", "image/zodiac/4.png", "image/zodiac/5.png", "image/zodiac/6.png", "image/zodiac/7.png", "image/zodiac/8.png", "image/zodiac/9.png", "image/zodiac/10.png", "image/zodiac/11.png", "image/zodiac/12.png"];

	// daily display script
	$.get('http://api.aduang.co/horoscopes/daily/today', function(data, status){

		console.log(data);
	});
});