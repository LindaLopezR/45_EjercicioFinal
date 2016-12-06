$(document).ready(function(){
	$('a.js-menu').css("display", "none");
	console.log('Está listo');

	$('a.js-show-recipe').click(function(){
		$('div.page.recipe').removeClass('make');
		$('a.js-show-recipe').addClass('active');
		$('a.js-show-make').removeClass('active');
	});

	$('a.js-show-make').click(function(){
		$('div.page.recipe').addClass('make');
		$('a.js-show-make').addClass('active');
		$('a.js-show-recipe').removeClass('active');

	});

	$('span.icon-arrow-left-alt').click(function(){
		window.location = "index.html";
	})
});

