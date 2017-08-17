//Animations and effects
$(document).ready(function(){
	$('input').on('focusin focusout', function(){
		var classe = $(this).attr('id');
		$('label[for="'+classe+'"]').toggleClass('text-primary');
	});
});