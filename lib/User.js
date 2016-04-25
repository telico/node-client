var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'user',
	endpoint: ''
};

function update(username, email, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'update';
	var data = {
		username: username,
		email: email
	};
	request(o, data, callback);
}

function change_password(oldpass, newpass, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'password/update';
	var data = {
		curpass: oldpass,
		newpass: newpass
	};
	request(o, data, callback);
}

module.exports = {
	update: update,
	change_password: change_password
};
