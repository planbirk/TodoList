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
			var url = "https://prod-33.westeurope.logic.azure.com:443/workflows/bbe461a956894542adcd0127b4ae4274/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=kc2xFD1cF50OZ_cjM0gZ8GUofni74jlmfxQR5fhM-54";			
		    var method = "POST";
		    var inputdata2 = {
		        id: "ele",
		        value: "1"
		    };
 //   var inputData = JSON.parse('{"testingElement": "2"}', (key,value) =>
				// typeof value === 'number'
				// 	? value * 2 
				// 	: value
		  //   	); 

		    //{"name":"binchen"};
			//JSON.stringify(j); // '{"name":"binchen"}'


//Send FormData [[[$( "#testform" ).serialize()]]]
			// $.post(url, method, inputData, function(data, status){ //Note:jQ001
			// 	if(data === 'yes') {
			// 	alert("Yes.\nResponseMessage: \n" + data);
		 //    		$("h1").toggleClass(".httpError");
		 //    		$("h1").val("Error occurred!")
			//     }else {
			//     	alert("noResp.");
			//     }
 
			//     }//end $.post()
			// );

			/* SYNTAX: $.ajax({name:value, name:value, ... }) */
	    $.ajax({url: url, type: method, contentType: "JSON", data: inputdata2,
		    success: function(result,xhr,status){
            		$("div").html(result);
        	},
        	complete: function(xhr,status){
        		alert("Stauts: " + status.status + " ____ Message: " + status.statusText);
        		alert("result: " + result);
        	},
        	error: function(xhr,status,error){
        		alert("Error: " + error);
        	}
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

