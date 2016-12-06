$(document).ready(function(){
	$('a.js-menu').css("display", "none");
	console.log('Está listo');

	$('a.js-show-recipe').click(function(){
		$('div.page.recipe').removeClass('make');
	});

	$('a.js-show-make').click(function(){
		$('div.page.recipe').addClass('make');
	});
});

