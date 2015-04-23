$(document).ready(function(){
	$('.list-item .remember').click(function(){
		$(this).text('').css('width', '20px');
		/*why dosent add min width?*/
		$(this).attr('contenteditable','true');
		/*var itemToRemember = $(this).val();*/
	})
	$('.remember').on("keydown", function(event){
	if (event.which == '13'){
	$('.list-item').first().clone(true).appendTo('.wrapper');
	/*$(this).text(itemToRemember).attr('contenteditable','true');*/
	/*$(this).find('p').toggleClass('record');*/
	$(this).text('');
	$(this).parent().parent().next().find('.remember').attr('class', 'record');
	};
	});
	/*$('.checkBox').on("click", function(){
		$('.check').hide();
		$('.restore').show();
	});*/
	
	$('.checkBox').on( "selectableunselecting", function ( event, ui ) {
    e.metaKey = true;
} ).selectable();
	
})
