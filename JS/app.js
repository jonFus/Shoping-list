$(document).ready(function(){
	var itemListTamplate = '<div class="list-item"><div class="checkBox"><div class="check"></div><div class="restore"></div></div><div class="item-content"><input class="remember"></div><!--change <p> to <imput> and style it--><div class="delete"><img src="Images/005-X-512.png" alt=""></div></div>'
	$('.list-item .remember').click(function(){
		$(this).val('')/*.css('text-indent', '3em');
		/*why dosent add min width?*/
		/*$(this).attr('contnteditable','true');
		/*var itemToRemember = $(this).val();*/
	})
	$('.wrapper').on("keydown", '.remember', function(event){
	if (event.which == '13'){
	/* 1. what does .on do that is different than a normal .click
	2. elements which were added to the DOM dynamicly cant be selected 
	so that is why ("keydown", '.remember' , ... is added
	3. How do I change the focus to the second list item after it's created*/
		$('.wrapper').append(itemListTamplate);
	};
	});
	$('.checkBox').data('state',1 );
	$('.wrapper').on("click", '.checkBox', function(){
		/* the check/uncheck functionality is gone. adding , '.checkBox' after "click"
		doesnt work*/
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
	$('.wrapper').on('click', '.delete', function(){
		$(this).parent().hide();
	});
	$('.list-name').click(function(){
		$(this).text('');
	})
})
