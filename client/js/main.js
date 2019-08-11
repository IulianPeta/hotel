$(run); // run when the page is loaded

function run() {
    $.get(
    	'http://localhost/hotel/server/clients.php',
    	parseClientsData
    );

    $.get(
    	'http://localhost/hotel/server/rooms.php',
    	parseRoomsData
    );

    $('#booking_form').submit(addBooking);
}

function parseRoomsData(roomsList) {
	roomsList.map(parseRoom);
}

function parseClientsData(clientsList) {
	clientsList.map(parseClient);
}

function parseClient(clientData) {
	clientElement = createOptionFromClientData(clientData);
	$('#clients_menu').append(clientElement);
}

function parseRoom(roomData) {
	roomElement = createOptionFromRoomData(roomData);
	$('#rooms_menu').append(roomElement);
}

function createOptionFromClientData(clientData) {

	option = $('<option></option>');
	option.attr('value', clientData.id);
	option.text(clientData.name);

	return option;
}

function createOptionFromRoomData(roomData) {

	option = $('<option></option>');
	option.attr('value', roomData.id);
	option.text(roomData.type + ' ' + roomData.price);

	return option;
}

function addBooking() {

    clientId = $('#clients_menu').val();
	roomId = $('#rooms_menu').val();
	startDate = $('input[name=start]').val();
    endDate = $('input[name=end]').val();
    
    $.post(
        'http://localhost/hotel/server/bookings.php',
        {
            client_id: clientId,
            room_id: roomId,
            start: startDate,
            end: endDate
        },
        function(responseData) {
            console.log(responseData);
        }
    );

    return false;
}