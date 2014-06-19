//utilities.js
//extended underscore helper functions
define('utilities',['jquery','underscore'],function($,_){
var util = require('util');
return {
	mapToNan : function(org,def){
		return _.defaults(org,def);
	},
	inspect: function(n,o,p,q){
		console.log('\n\t\033[1;37;41m***' +n +'***\033[m');
		console.log(util.inspect(o,p,q));
		console.log('\n');
	}//\033[0;37;41mCOLOR1\033[1;35;44mCOLOR2\033[m


}

});