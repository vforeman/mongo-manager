//mySchemas.js
//resource module of default schemas and schema functions
define('mySchemas',['jquery','underscore','mongoose'],function($,_,mongoose){
var Schema = mongoose.Schema;
	var shopperSchema= Schema({
		name: {first:String,last:String},
		email: {type:String,required:true,index:{unique:true,sparse:true}},
		active:{type:Boolean},
		meta:{}
	});
	var vendorSchema= Schema({
		orgName: String,
		email: {type:String,required:true,index:{unique:true,sparse:true}},
		active:{type:Boolean},
		meta:{}
	});

return {
	shopper : shopperSchema,
	vendor : vendorSchema
}

});