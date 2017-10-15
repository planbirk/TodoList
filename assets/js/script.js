if(jQuery){


$("ul").on("click","li",function(){	
	$(this).toggleClass("completed");
});

// X.click -> Delete Todo
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
		
});
 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		if(todoText !== ""){
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
			$(this).val("");
			var url = "https://prod-33.westeurope.logic.azure.com:443/workflows/bbe461a956894542adcd0127b4ae4274/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y-INwU77A5otxVOpenUv_l74BXTkhWp7QciHny70Ky0";
			var data = {
		        id: "ele",
		        value: "1"
		    };


			$.post(url, data,function(data, status){
			    	if(status === "success"){
			    		//works
			    	}else{
			    		$("h1").toggleClass(".httpError");
			    		$("h1").val("Error occurred!")
			    	}
			    },

			);
		}
	}
})


$(document).ajaxSuccess(function(event,xhr,options){
	var returnString = "AJAX request successfully completed";
	returnString += "\nEvent: " + event;
	returnString += "\nxhr: " + xhr;
	returnString += "\noptions: " + options;
	console.log("event: \n" + JSON.stringify(event));
	console.log("xhr: \n" + JSON.stringify(xhr));
    console.log("options: \n" + JSON.stringify(options));
}); 
	/*
{
	"url": "https://prod-33.westeurope.logic.azure.com:443/workflows/bbe461a956894542adcd0127b4ae4274/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Y-INwU77A5otxVOpenUv_l74BXTkhWp7QciHny70Ky0",
	"type": "POST",
	"isLocal": false,
	"global": true,
	"processData": true,
	"async": true,
	"contentType": "application/x-www-form-urlencoded; charset=UTF-8",
	"accepts": {
		"*": "*\/*",
		"text": "text/plain",
		"html": "text/html",
		"xml": "application/xml, text/xml",
		"json": "application/json, text/javascript",
		"script": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	"contents": {
		"xml": {},
		"html": {},
		"json": {},
		"script": {}
	},
	"responseFields": {
		"xml": "responseXML",
		"text": "responseText",
		"json": "responseJSON"
	},
	"converters": {
		"text html": true
	},
	"flatOptions": {
		"url": true,
		"context": true
	},
	"jsonp": "callback",
	"data": "id=ele&value=1",
	"dataTypes": ["text"],
	"crossDomain": true,
	"hasContent": true
}

*/


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

}else{
	alert("nojQuery");
}

