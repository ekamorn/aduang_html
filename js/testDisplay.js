$.ajax({
	url: 'http://api.aduang.co/horoscopes/daily/today',
	type: 'GET',
	// contentType: 'application/json',
	dataType: 'json',

	success: function(response) {
		console.log(response);
	}
});