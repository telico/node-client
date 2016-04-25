var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: '911',
	endpoint: ''
};

// var options = { unit_type: '', unit_number: '' };
function create(did_id, full_name, address, city, state, zip, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	if (typeof options == 'undefined') {
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		did_id: did_id,
		full_name: full_name,
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	if (typeof options.unit_type != 'undefined') {
		data.unit_type = options.unit_type;
	}
	if (typeof options.unit_number != 'undefined') {
		data.unit_number = options.unit_number;
	}
	request(o, data, callback);
}

function info(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'info';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function update(did_id, full_name, address, city, state, zip, options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	if (typeof options == 'undefined') {
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'update';
	var data = {
		did_id: did_id,
		full_name: full_name,
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	if (typeof options.unit_type != 'undefined') {
		data.unit_type = options.unit_type;
	}
	if (typeof options.unit_number != 'undefined') {
		data.unit_number = options.unit_number;
	}
	request(o, data, callback);
}

function remove(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function validate(address, city, state, zip) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'validate';
	var data = {
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	request(o, data, callback);
}

module.exports = {
	create: create,
	info: info,
	update: update,
	remove: remove,
	validate: validate
};
