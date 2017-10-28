if(jQuery){

var planbirk_web_dataExchangeURL = "https://prod-33.westeurope.logic.azure.com:443/workflows/bbe461a956894542adcd0127b4ae4274/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=kc2xFD1cF50OZ_cjM0gZ8GUofni74jlmfxQR5fhM-54";
	//Updated: $.getJSON expects additional query information  //Added url parameter "crud=read" to default url 
var getEntityRecords_bsc_development = "https://prod-58.westeurope.logic.azure.com:443/workflows/5d54e401a7dc43f18b70b7b5403bc35f/triggers/request/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Frequest%2Frun&sv=1.0&sig=HUoCukz1DiPBjTm9Kw7DlJvSx54A2I8qLhTnMtmDkcw";
var methodPost ="POST";
var methodGet ="GET";
var typeOfContent = "JSON";

var init = (function(){
	x();
})();

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
/* 
	* 15.10.17 Added ajax-request(post data to logic app) for new items
*/
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//this is equals to input element
		if($(this).val() !== ""){
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");
			

		    var newRecord = {
		        id: 1,
		        value: $(this).val()
		    };
					/* SYNTAX: $.ajax({name:value, name:value, ... }) */
		      $.ajax({url: planbirk_web_dataExchangeURL, type: methodPost, contentType: typeOfContent, data: newRecord,		      			
			    success: function(result,status,xhr){
			    	$("h1").text(result.response.message);
			    	console.log("ajaxSuccess: \n => Status: " + xhr.status + " StatusText: " + xhr.statusText + " ResponseText: " + xhr.responseText);
			    	$(this).val(""); //Make sure that the input field is empty for new items
	        	},
	        	complete: function(xhr,status){ /*console.log("ajaxComplete"); */},
	        	error: function(xhr,status,error){ alert("ajaxError: " + error); }
	        });


		}
	}
});
/* 
 * On jQuery.load initalize CDM-Data 
*/
var x = $.getJSON({url: getEntityRecords_bsc_development, data: {crud : "read"}})
.done(function(data){
		$.each(data, function(index, o){
			//setTimeout(function(){
				$("ul").append("<li data-id='" + o.PrimaryId + "''><span><i class='fa fa-trash'></i></span> " + o.Task + "</li>").hide().delay(800).fadeIn(500);
			//},800);
		})
		console.log("Total records [" + data.length + "]");
	}
).fail(
	function(jqxhr, textStatus, error){
		console.log("getJSON: \n => Error: " + error + " \n\nTextStatus: " + textStatus + " \n\njqxhr: " + jqxhr);
	}
).always(function(textStatus){
		/* 
		 *  insert
		 *  	something
		 */ 
	}
);

$(document).ajaxComplete(function(event,xhr,options){
//	console.log(">>>ajaxComplete<<< : AJAX request successfully completed");
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

}else{
	alert("nojQuery");
}



/*  CRUD
Create, Datensatz anlegen,
Read oder Retrieve, Datensatz lesen,
Update, Datensatz aktualisieren, und
Delete oder Destroy, Datensatz löschen.
*/