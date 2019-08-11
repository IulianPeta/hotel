<?php

	$mysqli = new mysqli('localhost', 'root', '', 'hotel');

	$result = $mysqli->query('SELECT * FROM clients');

	// while($row = $result->fetch_assoc()) 
	// {
	// 	print_r($row);
	// }

	print_r($result->fetch_all(MYSQLI_ASSOC));
?>