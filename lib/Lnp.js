var request = require('./base.js').request;
var clone = require('./base.js').clone;
var fs = require('fs');

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'lnp',
	endpoint: ''
};

/*
var port_data = {
	numbers: [],
	btn: '',
	location_type: 'business', // OR 'residential'
	business_contact: '',
	business_name: '',
	first_name: '',
	last_name: '',
	account_number: '',
	service_address: '',
	service_city: '',
	service_state: '',
	service_zip: '',
	signature: '', // '/path/to/signature.png'
	partial_port_details: '', //do not include to imply partial_port == false
	wireless_pin: '', //do not include to imply wireless_number == false,
	caller_id: '' //optional
};
*/
function create(port_data, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	fs.readFile(port_data.signature, function (err, signature_data) {
		if (err) {
			callback({ code: 400, status: 'error', data: 'Could not read signature file' });
			return false;
		}
		port_data.signature = new Buffer(signature_data).toString('base64');
		request(o, port_data, callback);
	});
}

function list(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, {}, callback);
}

function get(request_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'get';
	var data = { request_id: request_id };
	request(o, data, callback);
}

function check(numbers, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'check';
	var data = { numbers: numbers };
	request(o, data, callback);
}

module.exports = {
	create: create,
	list: list,
	get: get,
	check: check
};
