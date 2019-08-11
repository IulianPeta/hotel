<?php
header('Content-type: application/json');

require_once('db.php');

$result = $mysqli->query('SELECT * FROM rooms');
$rooms = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($rooms, JSON_PRETTY_PRINT);