var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'channelgroups',
	endpoint: ''
};

function create (name, channels, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'channelgroups';
	var data = {
		name: name,
		channels: channels
	};
	request(o, data, callback);
}

function get(channel_group_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'get';
	var data = { channel_group_id: channel_group_id };
	request(o, data, callback);
}

function list(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, {}, callback);
}

function update(channel_group_id, name, channels, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'update';
	var data = {
		channel_group_id: channel_group_id,
		name: name,
		channels: channels
	};
	request(o, data, callback);
}

function remove(channel_group_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { channel_group_id: channel_group_id };
	request(o, data, callback);
}

module.exports = {
	create: create,
	get: get,
	list: list,
	update: update,
	remove: remove
};
