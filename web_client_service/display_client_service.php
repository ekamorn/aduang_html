<?php
	// header('Content-type:text/html;charset=utf-8');


	// $ch = curl_init();

	// // set url for ajax display
	// curl_setopt($ch, CURLOPT_URL, 'http://api.aduang.co/horoscopes/daily/today');

	// // return the transfer as a string
	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	// // display output that we pushing from API
	// $output = curl_exec($ch);

	// // turn off contection
	// curl_close($ch);
	// // display output
	// echo $output;

	// API Url
	$url = 'http://obg-accountssvc-dev.azurewebsites.net/auth';

	// Initiate cURL.
	$ch = curl_init($url);

	$headers = array(
						'Ookbee-AppCode: ADUANG_402',
						'Ookbee-Auth-Rest-Api-Key: AREr1DBX6EZEf/f2Vsm4YsiZ86ZsNP5mxCWkW/COdEM3AEFEVUFOR180MDI=',
						'Accept: application/json',
						'Content-Type: application/x-www-form-urlencoded');

	$jsonData = array('platform' => 'samsung SM-N910C',
					  'deviceId' => 'deva/041d2329-fd16-37f4-89e0-c68b5911e07c',
					  'appCode' => 'ADUANG_402',
						'ookbeeId' => 'b22@test.com',
						'password' => '1234');

	// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($jsonData));
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

	curl_exec($ch);

		// $options = array(
		// 						'http' => array(
		// 							'header' => $headers,
		// 							'method' => 'POST',
		// 							'content' => http_build_query($jsonData)
		// 						)
		// 					);

		// // echo http_build_query($jsonData);

		// $jsonDataEncode = json_encode($jsonData);

		// $context  = stream_context_create($options);
		// $result = file_get_contents($url, false, $context);
		// var_dump($result);

?>

