var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'cart',
	endpoint: ''
};

function get(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'get';
	request(o, {}, callback);
}

function remove_item(item_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'item/remove';
	var data = { item_id: item_id };
	request(o, data, callback);
}

function checkout(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'checkout';
	request(o, {}, callback);
}

module.exports = {
	get: get,
	remove_item: remove_item,
	checkout: checkout
};
