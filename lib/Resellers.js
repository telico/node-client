var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'resellers',
	endpoint: ''
};

function create(username, password, email, first_name, last_name, address, city, state, zip, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		username: username,
		password: password,
		email: email,
		first_name: first_name,
		last_name: last_name,
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

function enable(reseller_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'enable';
	var data = { reseller_id: reseller_id };
	request(o, options, callback);
}

function disable(reseller_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'disable';
	var data = { reseller_id: reseller_id };
	request(o, data, callback);
}

function rates(reseller_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'rates';
	var data = { reseller_id: reseller_id };
	request(o, data, callback);
}

function fund(reseller_id, amount, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'fund';
	var data = {
		reseller_id: reseller_id,
		amount: amount
	};
	request(o, data, callback);
}

module.exports = {
	create: create,
	list: list,
	update: update,
	enable: enable,
	disable: disable,
	rates: rates,
	fund: fund
}
