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

		$.post(url,
	    {
	        id: "ele",
	        value: "1"
	    },
	    function(data, status){
	        alert("Data: " + data + "\nStatus: " + status);
	    });
		
	}
});
//xx




$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

}else{
	alert("nojQuery");
}