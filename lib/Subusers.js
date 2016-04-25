var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'subusers',
	endpoint: ''
};

function create(username, password, email, first_name, last_name, phone_number, address, city, state, zip, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		username: username,
		password: password,
		email: email,
		first_name: first_name,
		last_name: last_name,
		phone_number: phone_number,
		address: address,
		city: city,
		state: state,
		zip: zip
	};
	request(o, data, callback);
}

function list(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, {}, callback);
}

function update(options, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'update';
	request(o, options, callback);
}

function remove(subuser_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { subuser_id: subuser_id };
	request(o, data, callback);
}

module.exports = {
	create: create,
	list: list,
	update: update,
	remove: remove
};
