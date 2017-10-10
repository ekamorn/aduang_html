$(document).ready(function(){

	var windowWidth = $(window).width();

	// Array Pics For Weekly, Monthly and Year
	var arrayPic = ["image/zodiac/1.png", "image/zodiac/2.png", "image/zodiac/3.png", "image/zodiac/4.png", "image/zodiac/5.png", "image/zodiac/6.png", "image/zodiac/7.png", "image/zodiac/8.png", "image/zodiac/9.png", "image/zodiac/10.png", "image/zodiac/11.png", "image/zodiac/12.png"];

	// daily display script
	$.get('http://aduang-svc-dev.azurewebsites.net/horoscopes/daily', function(data, status) {

		var allContent,
				titleContent,
				eachDaily,
				eachDayCount,
				eachBirthDay,
				headDaily,
				contentDaily;

		var idDay;

		var dayArray = [],
				dayContents = {},
				arrayPic = ["image/days/sunday.png", "image/days/monday.png", "image/days/tuesday.png", "image/days/wednesday.png", "image/days/wednesday-night.png", "image/days/thurday.png", "image/days/friday.png", "image/days/saturday.png"];

		var	thisDay= ["sun", "mon", "tue", "wed", "webNight", "thur", "fri", "sat"];
	
		$.each(data, function(i, item){
			allContent = item;
			titleContent = item.title;

			eachDaily = item.contents.length;
		});

		for(var i = 0; i<eachDaily; i++) {
			eachDayCount = allContent.contents[i].contents.length;
			eachBirthDay = allContent.contents[i].dayOfBirth;

			idDay = allContent.contents[i].dayOfBirth;

			switch (eachBirthDay) {
				case 0:
				eachBirthDay = "วันอาทิตย์";
				break;

				case 1:
				eachBirthDay = "วันจันทร์";
				break;

				case 2:
				eachBirthDay = "วันอังคาร";
				break;

				case 3:
				eachBirthDay = "พุธกลางวัน";
				break;

				case 4:
				eachBirthDay = "พุธกลางคืน";
				break;

				case 5:
				eachBirthDay = "วันพฤหัส";
				break;

				case 6:
				eachBirthDay = "วันศุกร์";
				break;

				case 7: 
				eachBirthDay = "วันเสาร์"
				break;
			}

			dayArray.push(eachBirthDay);

			var bigBadge = document.createElement('div');
			bigBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
			bigBadge.innerHTML =
			'<div class="head-each-topic-collect">' +
				'<div class="head-day-pic-collect">' + 
					'<img class="img-responsive day-pic daily-pic">' +
				'</div>' +
				'<p class="head-each-day">' + dayArray[i] + '</p>' +
			'</div>' + 
			'<div class="daily-content-box-collect">' + '</div>';

			var badge = document.createElement('div');
			badge.className = 'head-each-topic-collect';
			badge.innerHTML = 
			'<div class="head-day-pic-collect">' +
			'<img class="img-responsive day-pic">' +
			'<p class="head-each-day">' + dayArray[i] + '</p>' +
			'</div>';

			 var badgeInside = document.createElement('div');
			badgeInside.className = 'daily-content-box-collect';

			if (windowWidth < 1260) {
				document.getElementById(i).appendChild(badge);
				document.getElementById(i).appendChild(badgeInside);	
			} 
			else {
				document.getElementById('daily--desktop-screen').appendChild(bigBadge);
			}

			$(".daily-content-box-collect").each(function(index) {
				$(this).attr("id", thisDay[index]);
			});

			for (var j = 0; j<eachDayCount; j++) {
				headDaily = allContent.contents[i].contents[j].title;
				contentDaily = allContent.contents[i].contents[j].text;

				var dailyHoroCon = document.createElement('p');
				dailyHoroCon.className = 'daily-content-collect';
				dailyHoroCon.innerHTML = 
				headDaily + contentDaily;

				document.getElementById(thisDay[i]).appendChild(dailyHoroCon);
			}
		}

		$(".day-pic").each(function(index){
			$(this).attr("src", arrayPic[index]);
		});

	});


	// weekly display script
	$.get('json/horoscope-daily-today.json', function(data, status) {
		var allWeekContent = data.contents,
			allZodiacWeek,
			countContentWeek,
			allContentWeek,
			allWeeklyData,
			allContentForWeek,
			allTitleWeek,
			allContentForWeek;

		var weeklyArray = [];

		var weeklyIdArray = ["ap1", "ma1", "jun1", "jul1", "aug1", "sep1", "oct1", "nov1", "dec1", "jan1", "feb1", "mar1"];

		$.each(allWeekContent, function(i, item) {
			allWeeklyData = item;
			allZodiacWeek = item.dayOfBirth;
			countContentWeek = item.contents.length;
			
			switch(allZodiacWeek) {
			case 0:
			allZodiacWeek = "เมษ";
			break;

			case 1:
			allZodiacWeek = "พฤษก";
			break;

			case 2:
			allZodiacWeek = "เมถุน";
			break;

			case 3: 
			allZodiacWeek = "กรกฏ";
			break;

			case 4:
			allZodiacWeek = "สิงห์";
			break;

			case 5:
			allZodiacWeek = "กันย์";
			break;

			case 6:
			allZodiacWeek = "ตุลย์";
			break;

			case 7:
			allZodiacWeek = "พิจิก";
			break;

			case 8:
			allZodiacWeek = "ธนู";
			break;

			case 9:
			allZodiacWeek = "มังกร";
			break;

			case 10:
			allZodiacWeek = "กุมภ์";
			break;

			case 11:
			allZodiacWeek = "มีน";
			break;
		}
			console.log(allZodiacWeek);


			weeklyArray.push(allZodiacWeek);

			var weeklyBadge = document.createElement('div');
					weeklyBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
					weeklyBadge.innerHTML =
					'<div class="head-each-topic-collect">' +
						'<div class="head-day-pic-collect">' +
							'<img class="img-responsive day-pic weekly-pic">' +
						'</div>' +
						'<p class="head-each-day">' + weeklyArray[i] + '</p>' +
					'</div>' +
					'<div class="daily-content-box-collect">' + '</div>';

			var weeklyMobileBadge = document.createElement('div');
					weeklyMobileBadge.className ='head-each-topic-collect';
					weeklyMobileBadge.innerHTML =
					'<div class="head-day-pic-collect">' +
						'<img class="img-responsive day-pic weekly-pic">' +
						'<p class="head-each-day">' + weeklyArray[i] + '</p>' +
					'</div>';

			var weeklyBadgeInside = document.createElement('div');
			weeklyBadgeInside.className = 'daily-content-box-collect';

			if (windowWidth < 1260) {
				document.getElementById(weeklyIdArray[i]).appendChild(weeklyMobileBadge);
				document.getElementById(weeklyIdArray[i]).appendChild(weeklyBadgeInside);
				
			}
			else {
				document.getElementById('weekly--desktop-screen').appendChild(weeklyBadge);
			}

			$(".daily-content-box-collect").each(function(index) {
		  	$(this).attr("id", weeklyArray[index]);
			});


			for (var w = 0; w<countContentWeek; w++) {
				allTitleWeek = allWeeklyData.contents[w].title;
				allContentForWeek = allWeeklyData.contents[w].text;

				// console.log(allTitleWeek);
				// console.log(allContentForWeek);

				var contentWeek = document.createElement('p');
						contentWeek.className = 'daily-content-collect';
						contentWeek.innerHTML = 
						allTitleWeek + allContentForWeek;

			}

			document.getElementById(weeklyArray[i]).appendChild(contentWeek);

		});

		$(".weekly-pic").each(function(index) {
			$(this).attr("src", arrayPic[index]);
		});

	});


	// Monthly get data
	$.get('json/horoscope-daily-today.json', function (data, status) {

		var allMonthContent = data.contents,
			zodiacMonthly,
			countContentMonth,
			allContentMonth,
			allMonthlyData,
			allContentForMonth;

		var monthlyArray = [];

		var	monthId = ["ap2", "ma2", "jun2", "jul2", "aug2", "sep2", "oct2", "nov2", "dec2", "jan2", "feb2", "mar2"];
		var monthIdM = ["ap22", "ma22", "jun22", "jul22", "aug22", "sep22", "oct22", "nov22", "dec22", "jan22", "feb22", "mar22"];

		$.each(allMonthContent, function(i, item) {
			allMonthlyData = item;
			zodiacMonthly = item.dayOfBirth;
			countContentMonth = item.contents.length;

			switch(zodiacMonthly) {
				case 0:
				zodiacMonthly = "เมษ";
				break;

				case 1:
				zodiacMonthly = "พฤษก";
				break;

				case 2:
				zodiacMonthly = "เมถุน";
				break;

				case 3: 
				zodiacMonthly = "กรกฏ";
				break;

				case 4:
				zodiacMonthly = "สิงห์";
				break;

				case 5:
				zodiacMonthly = "กันย์";
				break;

				case 6:
				zodiacMonthly = "ตุลย์";
				break;

				case 7:
				zodiacMonthly = "พิจิก";
				break;

				case 8:
				zodiacMonthly = "ธนู";
				break;

				case 9:
				zodiacMonthly = "มังกร";
				break;

				case 10:
				zodiacMonthly = "กุมภ์";
				break;

				case 11:
				zodiacMonthly = "มีน";
				break;
			}

			monthlyArray.push(zodiacMonthly);
			// console.log(monthIdM);

			var monthlyBadge = document.createElement('div');
				monthlyBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
				monthlyBadge.innerHTML = 
				'<div class="head-each-topic-collect">' +
					'<div class="head-day-pic-collect">' +
						'<img class="img-responsive day-pic monthly-pic">' +
					'</div>' +
					'<p class="head-each-day">' + monthlyArray[i] + '</p>' +
				'</div>' +
				'<div class="daily-content-box-collect monthly-content-box-collect">' + '</div>';

			var monthlyBadgeM = document.createElement('div');
					monthlyBadgeM.className ='head-each-topic-collect';
					monthlyBadgeM.innerHTML =
					'<div class="head-day-pic-collect">' +
						'<img class="img-responsive day-pic monthly-pic">' +
						'<p class="head-each-day">' + monthlyArray[i] + '</p>' +
					'</div>';

			var monthlyBadgeInside = document.createElement('div');
			monthlyBadgeInside.className = 'daily-content-box-collect monthly-content-box-collect';

			if (windowWidth < 1260) {
				document.getElementById(monthIdM[i]).appendChild(monthlyBadgeM);
				document.getElementById(monthIdM[i]).appendChild(monthlyBadgeInside);
			}
			else {
				document.getElementById('monthly--desktop-screen').appendChild(monthlyBadge);
			}

			$(".monthly-content-box-collect").each(function(index) {
		  	$(this).attr("id", monthId[index]);
			});

			for (var m = 0; m<countContentMonth; m++) {
				allTitleMonth = allMonthlyData.contents[m].title;
				allContentForMonth = allMonthlyData.contents[m].text;

				// console.log(allTitleMonth);

				var contentMonthly = document.createElement('p');
						contentMonthly.className = 'daily-content-collect';
						contentMonthly.innerHTML =
						allTitleMonth + allContentForMonth;
				}

				document.getElementById(monthId[i]).appendChild(contentMonthly);

		});

		$(".monthly-pic").each(function(index) {
			$(this).attr("src", arrayPic[index]);
		});

	});


	// Year get data
	$.get('json/horoscope-daily-today.json', function(data, status) {
		var allYearContent = data.contents,
				zodiacYear,
				countContentYear,
				allContentYear,
				allYearData,
				allContentForYear;

		var yearArray = [];

		var yearId = ["ap3", "ma3", "jun3", "jul3", "aug3", "sep3", "oct3", "nov3", "dec3", "jan3", "feb3", "mar3"];
		var yearIdM = ["ap33", "ma33", "jun33", "jul33", "aug33", "sep33", "oct33", "nov33", "dec33", "jan33", "feb33", "mar33"];

		$.each(allYearContent, function(i, item) {
			allYearData = item;
			zodiacYear = item.dayOfBirth;
			countContentYear = item.contents.length;

			switch(zodiacYear) {
				case 0:
				zodiacYear = "เมษ";
				break;

				case 1:
				zodiacYear = "พฤษก";
				break;

				case 2:
				zodiacYear = "เมถุน";
				break;

				case 3: 
				zodiacYear = "กรกฏ";
				break;

				case 4:
				zodiacYear = "สิงห์";
				break;

				case 5:
				zodiacYear = "กันย์";
				break;

				case 6:
				zodiacYear = "ตุลย์";
				break;

				case 7:
				zodiacYear = "พิจิก";
				break;

				case 8:
				zodiacYear = "ธนู";
				break;

				case 9:
				zodiacYear = "มังกร";
				break;

				case 10:
				zodiacYear = "กุมภ์";
				break;

				case 11:
				zodiacYear = "มีน";
				break;
			}

			yearArray.push(zodiacYear);

			var yearBadge = document.createElement('div');
			yearBadge.className = 'col-lg-3 col-md-3 col-sm-6 col-xl-3 col-12 mx-auto horo-daily-each--box item';
			yearBadge.innerHTML = 
			'<div class="head-each-topic-collect">' +
				'<div class="head-day-pic-collect">' +
					'<img class="img-responsive day-pic year-pic">' +
				'</div>' +
				'<p class="head-each-day">' + yearArray[i] + '</p>' +
			'</div>' +
			'<div class="daily-content-box-collect year-content-box-collect">' + '</div>';

			var yearBadgeM = document.createElement('div');
					yearBadgeM.className ='head-each-topic-collect';
					yearBadgeM.innerHTML =
					'<div class="head-day-pic-collect">' +
						'<img class="img-responsive day-pic year-pic">' +
						'<p class="head-each-day">' + yearArray[i] + '</p>' +
					'</div>';

			var yearBadgeInside = document.createElement('div');
			yearBadgeInside.className = 'daily-content-box-collect year-content-box-collect';

			if (windowWidth < 1260) {
				console.log(yearIdM[i]);
				document.getElementById(yearIdM[i]).appendChild(yearBadgeM);
				document.getElementById(yearIdM[i]).appendChild(yearBadgeInside);
			}
			else {
				document.getElementById('year--desktop-screen').appendChild(yearBadge);
			}

			$('.year-content-box-collect').each(function(index) {
				$(this).attr("id", yearId[index]);
			});

			for(var yh = 0; yh<countContentYear; yh++) {
				allTitleYear = allYearData.contents[yh].title;
				allContnetForYear = allYearData.contents[yh].text;

				var contentYear = document.createElement('p');
				contentYear.className = 'daily-content-collect';
				contentYear.innerHTML = 
				allTitleYear + allContnetForYear;

			}

			document.getElementById(yearId[i]).appendChild(contentYear);

		});

		$(".year-pic").each(function(index) {
			$(this).attr("src", arrayPic[index]);
		});

	});

	// get current date
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();

	var yyyy = today.getFullYear() + 543;

	console.log(mm);
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

 	today = dd + ' ' + mm + ' ' + yyyy;

 	$('#daily-date-box').html(today);
	console.log(today);

	// get weekly date 
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));

	var nextSaturday = new Date(today.setDate(today.getDate()-today.getDay()+6));

	lastSunday = lastSunday.getDate();
	nextSaturday = nextSaturday.getDate();

	var weeklyDate = lastSunday + '-' + nextSaturday + ' ' + mm + ' ' + yyyy;

	$('#weekly-date-box').html(weeklyDate);

	console.log("test : " + lastSunday);
	console.log("test2 : " + nextSaturday);
	

	// get monthly date
	var monthlyDate = 'เดือน' + mm;
	$('#monthly-date-box').html(monthlyDate);

	// get Year date
	var yearDate = 'ปีพ.ศ.' + ' ' +yyyy;
	$('#year-date-box').html(yearDate);

});