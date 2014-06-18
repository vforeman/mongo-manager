var rjs = require('requirejs');
rjs.config({
	baseUrl:__dirname,
	paths:{
		nodeRequire:require,
		utilities:'lib/utilities',
		mySchemas:'lib/mySchemas'
	}
});
rjs(['mongoose','jquery','underscore','utilities','mySchemas'],function(mongoose,$,_,Helper,mySchemas){
	return(function(){
					'use strict';
		var ret = {}; 
		console.log(mySchemas);
/*
STATIC DATA AND METHODS
*/
var data = {other:undefined,staticData:undefined,instanceData:undefined,defaultData:undefined};
var attr = [];
var func = [];
var events = [{'connection':[]}];
var fns={staticData:'func',instanceData:'func',defaultData:'func'};


	var localhost = '127.0.0.1',
		dbname = 'devmongomanager',
		port = 27017;
	var Schema = mongoose.Schema;
	// mongoose.connection.on('error')
/*
CONNECT
*/

  
/*
SCHEMA
*/
var sessionSchema = Schema({
	timeStamp:{}
});

})();

});