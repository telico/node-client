var rest = require('restler');
var configs = require('../configs.json');

function make_request(opts, data, callback) {
	callback = callback || function ()  {};
	var url = opts.base + '/' + opts.controller + '/' + opts.endpoint;
	data.token = configs.token;
	rest.post(url, { data: data }).on('complete', callback);
}

function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

module.exports = {
	request: make_request,
	clone: clone
}
