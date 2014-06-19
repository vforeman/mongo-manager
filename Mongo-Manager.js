var rjs = require('requirejs');
rjs.config({
	baseUrl:__dirname,
	paths:{
		nodeRequire:require,
		utilities:'lib/utilities',
		mySchemas:'lib/mySchemas'
	}
});
rjs(['mongoose','jquery','underscore','utilities','mySchemas'],function(mongoose,$,_,H,mySchemas){

		'use strict';console.log('Mongo-Manager');
var ret = {}; //object everything will be returned in
/*
STATIC DATA AND METHODS
*/
var data = {other:undefined,staticData:undefined,instanceData:undefined,defaultData:undefined};
H.inspect('Mongo-Manager.data',data,null,4);
var attr = [];
var func = [];
var events = [{'connection':[]}];
var fns={staticData:'func',instanceData:'func',defaultData:'func'};
var dflt ={
		localhost: '127.0.0.1',
		dbname: 'devmongomanager',
		port: 27017,
		access:'user'
}
console.log(dflt);
var Schema = mongoose.Schema;

var init = function(){	console.log('init function')
	
}
/*
CONNECT
*/
var connect = function(optIn){console.log('connect function')
	dflt = _.defaults(optIn,dflt);
	
	console.log(dflt);
};

  
/*
SCHEMA
*/
var sessionSchema = Schema({
	timeStamp:{}
});

ret.connect = connect;
ret.init = init;
H.inspect('Mongo-Manager',ret);




});