$(document).ready(function(){
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		console.log(data["json-result"]);
		$("body").append(
			Templates.project(data["json-result"])
			//Templates.project({
			//	'first thing': first_thing_json,
			//	'second thring': second_thing 
			//})
		);
		
		/* START jQuery Methods */


		
		/* END jQuery Methods */
	});
});