<?php
header('Content-type: application/json');

require_once('db.php');

$result = $mysqli->query('SELECT * FROM clients');
$clients = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($clients, JSON_PRETTY_PRINT);