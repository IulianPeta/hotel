$(function() {
    $.get(
    	'http://localhost/hotel/server/clients.php',
    	function(data) {
    		parseClientsData(data);
    	}
    );
});

function parseClientsData(clientsList) {
	clientsList.map(parseClient);
}

function parseClient(clientData) {
	clientElement = createOptionFromClientData(clientData);
	$('#clients_menu').append(clientElement);
}

function createOptionFromClientData(clientData) {

	option = $('<option></option>');
	option.attr('value', clientData.id);
	option.text(clientData.name);

	return option;
}