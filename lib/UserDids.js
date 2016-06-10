var request = require('./base.js').request;
var clone = require('./base.js').clone;

var opts = {
	base: 'https://apiv1.teleapi.net',
	controller: 'user/dids',
	endpoint: ''
};

function list(options, callback) {
	if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'list';
	request(o, options, callback);
}

function remove(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'remove';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function assign(did_id, new_user_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'assign';
	var data = {
		did_id: did_id,
		new_user_id: new_user_id
	};
	request(o, data, callback);
}

function flow(did_id, flow_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'flow';
	var data = {
		did_id: did_id,
		flow_id: flow_id
	};
	request(o, data, callback);
}

function channelgroup(did_id, channel_group_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'channelgroup';
	var data = {
		did_id: did_id,
		channel_group_id: channel_group_id
	};
	request(o, data, callback);
}

function voicemail(did_id, inbox_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'voicemail';
	var data = { did_id: did_id, inbox_id: inbox_id };
	request(o, data, callback);
}

function convert_fax(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'convert/fax';
	var data = { did_id: did_id };
	request(o, data, callback);
}

function convert_voice(did_id, callback) {
	callback = callback || function () {};
	var o = clone(opts);
	o.endpoint = 'convert/voice';
	var data = { did_id: did_id };
	request(o, data, callback);
}

module.exports = {
	list: list,
	remove: remove,
	assign: assign,
	flow: flow,
	channelgroup: channelgroup,
	voicemail: voicemail,
	convert_fax: convert_fax,
	convert_voice: convert_voice
};
