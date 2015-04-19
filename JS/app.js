$(document).ready(function(){
	$('.item-content').on("keydown", function(event){
	if (event.which == '13'){
	$('.list-item').first().clone(true).appendTo('.wrapper');
	};
	});

	$('.checkBox').on("click", function(){
		$('.check').hide();
		$('.restore').show();
	});
	
})
