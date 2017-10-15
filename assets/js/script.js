if(jQuery){

var planbirk_web_dataExchangeURL = "https://prod-33.westeurope.logic.azure.com/workflows/bbe461a956894542adcd0127b4ae4274/triggers/request/paths/invoke/bsc_Development?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=kc2xFD1cF50OZ_cjM0gZ8GUofni74jlmfxQR5fhM-54";
var methodPost ="POST";
var methodGet ="GET";
var typeOfContent = "JSON";
	
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

		    var newItem = {
		        id: "ele",
		        value: $(this).text()
		    };
 			//   var inputData = JSON.parse('{"testingElement": "2"}', (key,value) =>
				// typeof value === 'number'
				// 	? value * 2 
				// 	: value
		  //   	); 

			/* SYNTAX: $.ajax({name:value, name:value, ... }) */
		      $.ajax({url: planbirk_web_dataExchangeURL, type: methodPost, contentType: typeOfContent, data: newItem,
			    success: function(result,status,xhr){
			    	$("h1").text(result.response.message);
									    //result.response.id/value/respone
							        	//status eq "success"
							        	// xhr 
							        		// .status = 200 
							        		// .responseText = [logicapp body]
							        		// .statusText = "success"
							        		// .status.then(function)
			    	console.log("ajaxSuccess: \n => Status: " + xhr.status + " StatusText: " + xhr.statusText + " ResponseText: " + xhr.responseText);
			    	console.log();
	        	},
	        	complete: function(xhr,status){ /*console.log("ajaxComplete"); */},
	        	error: function(xhr,status,error){ alert("ajaxError: " + error); }
	        });
		}
	}
});


$(document).ajaxComplete(function(event,xhr,options){
	console.log(">>>ajaxComplete<<< : AJAX request successfully completed");
	
	// returnString += "\nEvent: " + event;
	// returnString += "\nxhr: " + xhr;
	// returnString += "\noptions: " + options;
	// console.log("event: \n" + JSON.stringify(event));
	// console.log("xhr: \n" + JSON.stringify(xhr));
 //    console.log("options: \n" + JSON.stringify(options));
    if ( options.url === "https://prod-33.westeurope.logic.azure.com/workflows/bbe461a956894542adcd0127b4ae4274/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=kc2xFD1cF50OZ_cjM0gZ8GUofni74jlmfxQR5fhM-54") {
    	console.log( "Triggered ajaxComplete handler. The result is " + xhr.responseText );
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

}else{
	alert("nojQuery");
}

