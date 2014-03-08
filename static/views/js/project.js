$(document).ready(function(){
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		$("body").append(
			Templates.project(data["json-result"])
		);
		
		/* START jQuery Methods */


		
		/* END jQuery Methods */
	});
});