var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'ipendpoints',
	endpoint: ''
};

function create(ip_address, friendly_name, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		ip_address: ip_address,
		ip_name: ip_name
	};
	request(o, data, callback);
}

function list(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, {}, callback);
}

function remove(endpoint_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { endpoint_id: endpoint_id };
	request(o, data, callback);
}

module.exports = {
	create: create,
	list: list,
	remove: remove
};
