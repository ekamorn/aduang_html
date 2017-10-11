<?php
	// Initiate cURL
	$ch = curl_init();

	// API url
	$url_horo_weekly = 'http://api.aduang.co/horoscopes/weekly/today';

	// headers
	$headers = 'Content-type: text/html;chaset=utf-8';

	// set url for ajax display
	curl_setopt($ch, CURLOPT_URL, $url_horo_weekly);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($ch);
	echo $result;
	curl_close($ch);
?>