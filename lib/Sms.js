var request = require('./base.js').request;
var clone = require('./base.js').clone;
var fs = require('fs');

var opts = {
	base: 'https://sms.teleapi.net',
	controller: '',
	endpoint: ''
};

function sms_send(source, destination, message, notify_url, callback) {
	if (typeof notifY_url == 'function') {
		callback = notify_url;
		notify_url = false;
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.controller = 'sms';
	o.endpoint = 'send';
	var data = {
		source: source,
		destination: destination,
		message: message
	}
	if (notify_url) {
		data.notify_url = notify_url;
	}
	request(o, data, callback);
}

function mms_send(source, destination, full_file_path, notify_url, callback) {
	if (typeof notifY_url == 'function') {
		callback = notify_url;
		notify_url = false;
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.controller = 'sms';
	o.endpoint = 'send';
	var data = {
		source: source,
		destination: destination
	}
	if (notify_url) {
		data.notify_url = notify_url;
	}
	fs.readFile(full_file_path, function (err, file_data) {
		if (err) {
			callback({ code: 400, status: 'error', data: 'File not found' });
			return false;
		}
		data.file_name = full_file_path.split('/').pop();
		data.file_data = file_data;
		request(o, data, callback);
	});
}

module.exports = {
	sms_send: sms_send,
	mms_send: mms_send
};
