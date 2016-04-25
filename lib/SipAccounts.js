var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'sipaccounts',
	endpoint: ''
};

function create(username, password, account_type, callback) {
	callback = callback || function () {};
	account_type = account_type.toLowerCase();
	if (account_type != 'server' && account_type != 'device') {
		callback({ code: 400, status: 'error', data: 'account_type must be "device" or "server"' });
		return false;
	}
	var o = clone(opts);
	o.endpoint = 'create';
	var data = {
		username: username,
		password: password,
		account_type: account_type
	};
	request(o, data, callback);
}

function list(callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, {}, callback);
}

function update(sipaccount_id, username, password, account_type, callback) {
	callback = callback || function () {};
	account_type = account_type.toLowerCase();
	if (account_type != 'server' && account_type != 'device') {
		callback({ code: 400, status: 'error', data: 'account_type must be "device" or "server"' });
		return false;
	}
	var o = clone(opts);
	o.endpoint = 'update';
	var data = {
		sipaccount_id: sipaccount_id,
		username: username,
		password: password,
		account_type: account_type
	};
	request(o, data, callback);
}

function remove(sipaccount_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { sipaccount_id: sipaccount_id };
	request(o, data, callback);
}

module.exports = {
	create: create,
	list: list,
	update: update,
	remove: remove
};
