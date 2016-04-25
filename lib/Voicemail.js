var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'voicemail',
	endpoint: ''
};

function create_inbox(name, inbox_number, pin, transcribe, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'inbox/create';
	var data = {
		name: name,
		inbox_number: inbox_number,
		pin: pin,
		transcribe: transcribe
	};
	request(o, data, callback);
}

function get_inbox(inbox_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'inbox/get';
	var data = { inbox_id: inbox_id };
	request(o, data, callback);
}

function list_inboxes(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'inbox/list';
	request(o, {}, callback);
}

function update_inbox(inbox_id, name, inbox_number, pin, transcribe, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'inbox/update';
	var data = {
		inbox_id: inbox_id,
		name: name,
		inbox_number: inbox_number,
		pin: pin,
		transcribe: transcribe
	};
	request(o, data, callback);
}

function remove_inbox(inbox_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'inbox/remove';
	var data = { inbox_id: inbox_id };
	request(o, data, callback);
}

module.exports = {
	create_inbox: create_inbox,
	get_inbox: get_inbox,
	list_inboxes: list_inboxes,
	update_inbox: update_inbox,
	remove_inbox: remove_inbox
};
