var request = require('./base.js').request;
var clone = require('./base.js').clone;
var fs = require('fs');

var opts = {
	base: 'https://sms.teleapi.net',
	controller: '',
	endpoint: ''
};

function sms_send(source, destination, message, notify_url, callback) {
	console.log('notify_url:', typeof notify_url);
	console.log('callback:', typeof callback);
	if (typeof notify_url == 'function') {
		callback = notify_url;
		notify_url = false;
	}
	console.log('notify_url:', typeof notify_url);
	console.log('callback:', typeof callback);
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
	if (typeof notify_url == 'function') {
		callback = notify_url;
		notify_url = false;
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.controller = 'mms';
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
			callback({ code: 400, status: 'error', data: 'Could not read file' });
			return false;
		}
		data.file_name = full_file_path.split('/').pop();
		data.file_data = new Buffer(file_data).toString('base64');
		request(o, data, callback);
	});
}

module.exports = {
	sms_send: sms_send,
	mms_send: mms_send
};
