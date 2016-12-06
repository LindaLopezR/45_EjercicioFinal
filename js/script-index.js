$(document).ready( function(){
	$('a.js-back').css('display', 'none');
	$('div.callout-news').append('<h4>NUEVAS RECETAS</h4>');

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});

function printNews(){

}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (i=0;i<recipesArray.length;i++){
		 if (recipesArray[i].highlighted == true) {
      		renderRecipe(recipesArray[i]);

		}
	}
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$('<a>', {
		class: 'item-recipe',
		href: '#',
	}).append($('<span>', {
		class: 'attribution'
	}).append($('<span>', {
		text: recipesArray[i].title,
		class: 'title-recipe'
	}), $('<span>', {
		class: 'metadata-recipe'
	}).append($('<span>', {
		class: 'author-recipe',
		text: recipesArray[i].source.name
	}), $('<span>', {
		class: 'bookmarks-recipe'
	}).append($('<span>', {
		class: 'icon-bookmark'
	})))), $('<img>',{
		src: 'img/recipes/320x350/'+recipesArray[i].name+'.jpg'
	})).appendTo('div.list-recipes');

	console.log('Voy a pintar la receta: ', recipe);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


