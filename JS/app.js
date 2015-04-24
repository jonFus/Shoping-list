$(document).ready(function(){
	$('.list-item .remember').click(function(){
		$(this).text('').css('text-indent', '3em');
		/*why dosent add min width?*/
		$(this).attr('contenteditable','true');
		/*var itemToRemember = $(this).val();*/
	})
	$('.remember').on("keydown", function(event){
	if (event.which == '13'){
	/*$('.list-item').first().clone(true).appendTo('.wrapper');*/
	$(this).parent().parent().clone(true).appendTo('.wrapper');
	/*why after() didnt work?*/
	$(this).text('');
	};
	});
	$('.checkBox').data('state',1 );
	$('.checkBox').on("click", function(){
		if ($(this).data('state')==1){
			$(this).children('.check').hide();
			$(this).children('.restore').show();
			$(this).parent().css('background','rgba(255,153,204,0.7)');
			$(this).siblings().children('p').css({'color':'#ff0066','text-decoration':'line-through'});
			$(this).data('state', 2);
		}
		else if ($(this).data('state')==2){
			$(this).children('.check').show();
			$(this).children('.restore').hide();
			$(this).parent().css('background','rgba(0,0,0,0.3)');
			$(this).siblings().children('p').css({'color':'black', 'text-decoration':'none'});
			$(this).data('state', 1);
			}
	});	
	$('.delete').on('click', function(){
		$(this).parent().hide();
	});
	$('.list-name').click(function(){
		$(this).text('');
	})
})
