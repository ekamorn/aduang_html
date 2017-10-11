<?php
	
	// API url
	$url_login = 'http://obg-accountssvc-dev.azurewebsites.net/auth';

	// Initiate cURL
	$ch = curl_init($url_login);

	// headers array for Auth Rest Api key
	$headers = array(
									'Ookbee-AppCode: ADUANG_402',
									'Ookbee-Auth-Rest-Api-Key: AREr1DBX6EZEf/f2Vsm4YsiZ86ZsNP5mxCWkW/COdEM3AEFEVUFOR180MDI=',
									'Accept: application/json',
									'Content-Type: application/x-www-form-urlencoded');

	// body array for login
	$jsonBody = array(
									'platform' => 'website',
									'deviceId' => 'website/ADUANG_402',
									'appCode'  => 'ADUANG_402',
									'ookbeeId' => 'b22@test.com',
									'password' => '1234');

	// cURL set OPT for sending headers & body
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($jsonBody));
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

	curl_exec($ch);
	curl_close($ch);
?>