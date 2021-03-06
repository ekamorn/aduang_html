$(document).ready(function(){

	// get window width for active & display contents
	var windowWidth  = $(window).width();

	var	thisDayArray = ["sun", "mon", "tue", "wed", "webNight", "thur", "fri", "sat"];
	var weeklyArray  = ["ap1", "ma1", "jun1", "jul1", "aug1", "sep1", "oct1", "nov1", "dec1", "jan1", "feb1", "mar1"];
	var	monthlyArray = ["ap2", "ma2", "jun2", "jul2", "aug2", "sep2", "oct2", "nov2", "dec2", "jan2", "feb2", "mar2"];
	var yearArray		 = ["ap3", "ma3", "jun3", "jul3", "aug3", "sep3", "oct3", "nov3", "dec3", "jan3", "feb3", "mar3"];

	var weeklyBigArray  = ["ap11", "ma11", "jun11", "jul11", "aug11", "sep11", "oct11", "nov11", "dec11", "jan11", "feb11", "mar11"];
	var monthlyArrayM = ["ap22", "ma22", "jun22", "jul22", "aug22", "sep22", "oct22", "nov22", "dec22", "jan22", "feb22", "mar22"];
	var yearArrayM 	 = ["ap33", "ma33", "jun33", "jul33", "aug33", "sep33", "oct33", "nov33", "dec33", "jan33", "feb33", "mar33"];


	var dayPicUrl		 = ["image/days/sunday.png", "image/days/monday.png", "image/days/tuesday.png", "image/days/wednesday.png", "image/days/wednesday-night.png", "image/days/thurday.png", "image/days/friday.png", "image/days/saturday.png"];
	var zodiacPicUrl = ["image/zodiac/1.png", "image/zodiac/2.png", "image/zodiac/3.png", "image/zodiac/4.png", "image/zodiac/5.png", "image/zodiac/6.png", "image/zodiac/7.png", "image/zodiac/8.png", "image/zodiac/9.png", "image/zodiac/10.png", "image/zodiac/11.png", "image/zodiac/12.png"];

	// push day name function 
	function pushDayName(name) {
		switch (name) {
			case 0:
			name = "วันอาทิตย์";
			break;

			case 1:
			name = "วันจันทร์";
			break;

			case 2:
			name = "วันอังคาร";
			break;

			case 3:
			name = "พุธกลางวัน";
			break;

			case 4:
			name = "พุธกลางคืน";
			break;

			case 5:
			name = "วันพฤหัส";
			break;

			case 6:
			name = "วันศุกร์";
			break;

			case 7:
			name = "วันเสาร์";
			break;
		}

		return name;
	}

	// push zodiac name function
	function pushZodiacName (zodiac) {
		switch (zodiac) {
			case 0:
			zodiac = "เมษ";
			break;

			case 1:
			zodiac = "พฤษก";
			break;

			case 2:
			zodiac = "เมถุน";
			break;

			case 3:
			zodiac = "กรกฏ";
			break;

			case 4:
			zodiac = "สิงห์";
			break;

			case 5:
			zodiac = "กันย์";
			break;

			case 6:
			zodiac = "ตุลย์";
			break;

			case 7:
			zodiac = "พิจิก";
			break;

			case 8:
			zodiac = "ธนู";
			break;

			case 9:
			zodiac = "มังกร";
			break;

			case 10:
			zodiac = "กุมภ์";
			break;

			case 11: 
			zodiac = "มีน";
			break;
		}

		return zodiac;
	}

	// get daily url for displaying data
	CallService('/a-duangHTML-final/web_client_service/display_client_service.php', true, function(msg){
		var allContents 	= msg.contents;
		var contentLength = msg.contents.length;
		var dayNameArray		= [];

		for(var i = 0; i<contentLength; i++) {
			var lengthDayContents = allContents[i].contents.length;
			var eachDayContents 	= allContents[i].contents;

			var eachDayName = pushDayName(i);
			dayNameArray.push(eachDayName);

			// Create div for displaying the horoscope today
			var todayBadge 					 = document.createElement('div');
					todayBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
					todayBadge.innerHTML = 
					'<div class="head-each-topic-collect">' + 
						'<div class="head-day-pic-collect">' +
							'<img class="img-reponsive day-pic daily-pic" src=" ' + dayPicUrl[i] + ' "">' +
						'</div>' +
						'<p class="head-each-day">' + dayNameArray[i] + '</p>' +
					'</div>' + 
					'<div class="daily-content-box-collect today-content-box-collect">' + '</div>';

			var todayBadgeMobile 					 = document.createElement('div');
					todayBadgeMobile.className = 'head-each-topic-collect';
					todayBadgeMobile.innerHTML =
					'<div class="head-day-pic-collect">' +
						'<img class="img-reponsive day-pic" src="' + dayPicUrl[i] + '">' +
						'<p class="head-each-day">' + dayNameArray[i] + '</p>' +
					'</div>';

			var todayInsideBadge 					 = document.createElement('div');
					todayInsideBadge.className = 'daily-content-box-collect today-content-box-collect';

			// build div for displaying by following the screen width
			if (windowWidth < 1260) {

				document.getElementById(i).appendChild(todayBadgeMobile);
				document.getElementById(i).appendChild(todayInsideBadge);

			} else {

				document.getElementById('daily--desktop-screen').appendChild(todayBadge);
			
			}

			$(".today-content-box-collect").each(function(index) {
				$(this).attr('id', thisDayArray[index]);
			});

			for (var j = 0; j<lengthDayContents; j++) {
				var eachTopicContents = eachDayContents[j];
				var eachTitleContents = eachDayContents[j].title;
				var eachTextContents  = eachDayContents[j].text;

				var todayHoroContents				= document.createElement('p');
				todayHoroContents.className = 'daily-content-collect';
				todayHoroContents.innerHTML =
				eachTitleContents + eachTextContents;

				document.getElementById(thisDayArray[i]).appendChild(todayHoroContents);
			}			
		}
	});


	// get weekly url for displaying data
	CallService('/a-duangHTML-final/web_client_service/display_client_service_weekly.php', true, function(msg) {
		var allContents 	  = msg.contents;
		var contentLength   = msg.contents.length;
		var zodiacNameArray = [];

		for (var i = 0; i<contentLength; i++) {
			var lengthZodiacContents = allContents[i].contents.length;
			var eachZodiacContents	 = allContents[i].contents;

			// return push name function
			var eachZodiacName = pushZodiacName(i);
			zodiacNameArray.push(eachZodiacName);

			var weeklyBadge 					= document.createElement('div');
					weeklyBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
					weeklyBadge.innerHTML =
					'<div class="head-each-topic-collect">' +
						'<div class="head-day-pic-collect">' + 
							'<img class="img-reponsive day-pic weekly-pic" src= "' + zodiacPicUrl[i] + '"">' +
						'</div>' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>' +
					'</div>' +
					'<div class="daily-content-box-collect weekly-content-box-collect">' + '</div>';

			var weeklyBadgeMobile 					= document.createElement('div');
					weeklyBadgeMobile.className = 'head-each-topic-collect';
					weeklyBadgeMobile.innerHTML =
					'<div class="head-day-pic-collect">' +
						'<img class="img-reponsive day-pic weekly-pic" src="' + zodiacPicUrl[i] + '">' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>'
					'</div>';

			var weeklyInsideBadge = document.createElement('div');
					weeklyInsideBadge.className = 'daily-content-box-collect weekly-content-box-collect';

			// build div for displaying by following window.width()
			if (windowWidth < 1260) {

				document.getElementById(weeklyArray[i]).appendChild(weeklyBadgeMobile);
				document.getElementById(weeklyArray[i]).appendChild(weeklyInsideBadge);

			} else {
				
				document.getElementById('weekly--desktop-screen').appendChild(weeklyBadge);
			
			}

			$(".weekly-content-box-collect").each(function(index) {
				$(this).attr('id', weeklyBigArray[index]);
			});
 
			for (var j = 0; j<lengthZodiacContents; j++) {
				var eachTopicContents = eachZodiacContents[j];
				var eachTitleContents = eachZodiacContents[j].title;
				var eachTextContents  = eachZodiacContents[j].text;

				var contentWeek 					= document.createElement('p');
						contentWeek.className = 'daily-content-collect';
						contentWeek.innerHTML =
						eachTitleContents + eachTextContents;

				document.getElementById(weeklyBigArray[i]).appendChild(contentWeek);
			}
		}

	});


	// get montly url for displaying data
	CallService('/a-duangHTML-final/web_client_service/display_client_service_weekly.php', true, function(msg){
		
		var allContents 		= msg.contents;
		var contentLength   = msg.contents.length;
		var zodiacNameArray = [];

		for (var i = 0; i<contentLength; i++) {
			var lengthZodiacContents = allContents[i].contents.length;
			var eachZodiacContents	 = allContents[i].contents;

			// return push name zodiac array
			var eachZodiacName = pushZodiacName(i);
			zodiacNameArray.push(eachZodiacName);

			var monthlyBadge					 = document.createElement('div');
					monthlyBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
					monthlyBadge.innerHTML = 
					'<div class="head-each-topic-collect">' +
						'<div class="head-day-pic-collect">' +
							'<img class="img-reponsive day-pic weekly-pic" src="' + zodiacPicUrl[i] + '">' +
						'</div>' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>' +
					'</div>' +
					'<div class="daily-content-box-collect monthly-content-box-collect">' + '</div>';


			var monthlyBadgeMobile 					 = document.createElement('div');
					monthlyBadgeMobile.className = 'head-each-topic-collect';
					monthlyBadgeMobile.innerHTML =
					'<div class="head-day-pic-collect">' + 
						'<img class="img-reponsive day-pic weekly-pic" src="' + zodiacPicUrl[i] + '">' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>' +
					'</div>';

			var monthlyInsideBadge 					 = document.createElement('div');
					monthlyInsideBadge.className = 'daily-content-box-collect monthly-content-box-collect';

			if (windowWidth < 1260) {

				document.getElementById(monthlyArrayM[i]).appendChild(monthlyBadgeMobile);
				document.getElementById(monthlyArrayM[i]).appendChild(monthlyInsideBadge);

			} else {
				
				document.getElementById('monthly--desktop-screen').appendChild(monthlyBadge);
			
			}

			$('.monthly-content-box-collect').each(function(index) {
				$(this).attr('id', monthlyArray[index]);
			});

			for (var j = 0; j<lengthZodiacContents; j++) {
				var eachTopicContents = eachZodiacContents[j];
				var eachTitleContents = eachZodiacContents[j].title;
				var eachTextContents  = eachZodiacContents[j].text;

				var contentMonth = document.createElement('p');
						contentMonth.className = 'daily-content-collect';
						contentMonth.innerHTML =
						eachTitleContents + eachTextContents;

				document.getElementById(monthlyArray[i]).appendChild(contentMonth);
			}
		}
	});


	// get year url for displaying data
	CallService('/a-duangHTML-final/web_client_service/display_client_service_weekly.php', false, function(msg) {
		var allContents 		= msg.contents;
		var contentLength 	= msg.contents.length
		var zodiacNameArray = [];

		for (var i =0; i<contentLength; i++) {
			var lengthZodiacContents = allContents[i].contents.length;
			var eachZodiacContents 	 = allContents[i].contents;

			// return push name function
			var eachZodiacName = pushZodiacName(i);
			zodiacNameArray.push(eachZodiacName);

			var yearBadge 					= document.createElement('div');
					yearBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
					yearBadge.innerHTML =
					'<div class="head-each-topic-collect">' +
						'<div class="head-day-pic-collect">' +
							'<img class="img-reponsive day-pic weekly-pic" src="' + zodiacPicUrl[i] + '">' +
						'</div>' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>' +
					'</div>' +
					'<div class="daily-content-box-collect year-content-box-collect">' + '</div>';

			var yearBadgeMobile 					= document.createElement('div');
					yearBadgeMobile.className = 'head-each-topic-collect';
					yearBadgeMobile.innerHTML = 
					'<div class="head-day-pic-collect">' +
						'<img class="img-reponsive day-pic year-pic" src="' + zodiacPicUrl[i] + '">' +
						'<p class="head-each-day">' + zodiacNameArray[i] + '</p>' +
					'</div>';

			var yearInsideBadge = document.createElement('div');
					yearInsideBadge.className = 'daily-content-box-collect year-content-box-collect';


			if (windowWidth < 1260) {

				document.getElementById(yearArrayM[i]).appendChild(yearBadgeMobile);
				document.getElementById(yearArrayM[i]).appendChild(yearInsideBadge);

			} else {

				document.getElementById('year--desktop-screen').appendChild(yearBadge);
		
			}

			$('.year-content-box-collect').each(function(index){
				$(this).attr('id', yearArray[index]);
			});

			for(var j = 0; j<lengthZodiacContents; j++) {
				var eachTopicContents = eachZodiacContents[j];
				var eachTitleContents = eachZodiacContents[j].title;
				var eachTextContents	= eachZodiacContents[j].text;

				var contentYear 					= document.createElement('p');
						contentYear.className = 'daily-content-collect';
						contentYear.innerHTML = 
						eachTitleContents + eachTextContents;

				document.getElementById(yearArray[i]).appendChild(contentYear);
			}
		}
	});


	// get articles url for displaying data
	CallService('/a-duangHTML-final/web_client_service/display_client_service_article', false, function(msg) {
		var allContents   = msg;
		var contentLength = msg.length;

		for(var i = 0; i < contentLength; i++) {

			var titleArticle   = allContents[i].title;
			var textArticle    = allContents[i].text;
			var coverArticle   = allContents[i].imageUrl;
			var creatorArticle = allContents[i].creator.nickname;
			
			console.log("cover is : " + coverArticle);
			console.log("Title is : " + titleArticle);
			console.log("Text is : " + textArticle);
			console.log("Creator is : " + creatorArticle);

			var queryLinks 					 = document.createElement('a');
					queryLinks.className = 'article-link-box-collection';

		}
	});


	// callBack function for calling the API urls
	function CallService(url, async, callBack) {
		$.ajax({
			type: 'GET',
			dataType: 'json',
			beforeSend: function(jqXHR, settings) {
				// maybe add some loading effects here..
			},
			url: url,
			data: '',
			contentType: 'application/json; chaset=utf-8',
			async: async,
			success: function(msg) {

				return callBack(msg);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// fix bug error not set false
				console.log(textStatus);
			},

			complete: function(jqXHR, textStatus) {

			}
		});
	}


	// get time date
	var today = new Date();
	var dd 		= today.getDate();
	var mm 		= today.getMonth();
	var yyyy	= today.getFullYear() + 543;

	switch (mm) {
		case 0:
		mm = "มกราคม";
		break;

		case 1:
		mm = "กุมภาพันธ์";
		break;

		case 2:
		mm = "มีนาคม";
		break;

		case 3:
		mm = "เมษายน";
		break;

		case 4:
		mm = "พฤษภาคม";
		break;

		case 5: 
		mm = "มิถุนายน";
		break;

		case 6:
		mm = "กรกฎาคม";
		break;

		case 7:
		mm = "สิงหาคม";
		break;

		case 8:
		mm = "กันยายน";
		break;

		case 9:
		mm = "ตุลาคม";
		break;

		case 10:
		mm = "พฤศจิกายน";
		break;

		case 11:
		mm = "ธันวาคม";
		break;
	}

	var thisDay = dd + ' ' + mm + ' ' + yyyy;
	$('#daily-date-box').html(thisDay);

	// weekly date time
	var now 				 = new Date();
	var stdDay 		   = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var lastSunday   = new Date(stdDay.setDate(stdDay.getDate()-stdDay.getDate()+8));
	var nextSaturday = new Date(stdDay.setDate(stdDay.getDate()-stdDay.getDate()+14));

	lastSunday   = lastSunday.getDate();
	// console.log(lastSunday);
	nextSaturday = nextSaturday.getDate();
	// console.log(nextSaturday);

	var weeklyDate = lastSunday + '-' + nextSaturday + ' ' + mm + ' ' + yyyy;

	$('#weekly-date-box').html(weeklyDate);

});