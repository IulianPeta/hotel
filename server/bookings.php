<?php

header('Content-type: application/json');

//require_once('db.php');

if (isGetRequest()) {
    showBookings();
} else {
    handlePostRequest();
}

function isGetRequest() {
    return !isset($_POST['client_id']);
}

function showBookings() {
    // read from bookings table data and show it as JSON
    echo 'get data from db';
}

function handlePostRequest() {

    $query = "INSERT INTO bookings " .
        '(client_id, room_id, start_date, end_date)' .
        ' VALUES ' .
        '(' . $_POST['client_id'] . ',' . $_POST['room_id'] . ',' . $_POST['start'] . ',' . $_POST['end'] . ')';

    //$mysqli->query($query);

    echo json_encode(
        array(
            'message' => 'booking added successfully',
            'query' => $query
        )
    );
}

