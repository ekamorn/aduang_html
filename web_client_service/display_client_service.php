<?php
	// Initiate cURL
	$ch = curl_init();
	
	// API url
	$url_horo_daily = 'http://api.aduang.co/horoscopes/daily/today';

	// headers
	$headers = 'Content-type: text/html;chaset=utf-8';

	// set url for ajax display
	curl_setopt($ch, CURLOPT_URL, $url_horo_daily);

	// return the transfer as a string
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// display output that we pushing from API
	$result = curl_exec($ch);
	echo $result;

	// turn off conection
	curl_close($ch);

	// $test = $_POST['name'];

	// echo json_encode($test);
?>

