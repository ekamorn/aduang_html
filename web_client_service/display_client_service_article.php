<?php
	// Initiate cURL
$ch = curl_init();

// API url
$url_horo_articles = 'http://aduang-svc-dev.azurewebsites.net/articles/general';

// headers 
$headers = ['Content-Type: application/json;'];

// set url for ajax display
curl_setopt($ch, CURLOPT_URL, $url_horo_articles);

// set headers
// curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// display output that we pushing from API
$result = curl_exec($ch);
echo $result;

// turn off conection
curl_close($ch);

?>