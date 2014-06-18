//utilities.js
//extended underscore helper functions
define('utilities',['jquery','underscore'],function($,_){
return {
	mapToNan : function(org,def){
		return _.defaults(org,def);
	}


}

});