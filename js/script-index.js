$(document).ready( function(){
	$(".js-back").hide();

//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
renderHighlightedRecipes(recipesArray);


	$(".js-menu").click(function() {
		$(".js-back").show();
		$(".js-menu").hide();
	 });

});
function printNews(){
$( "#p-new" ).append("NUEVAS RECETAS");
 
}		
printNews();


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

function renderHighlightedRecipes(recipesArray) {
	for (i = 0; i < recipesArray.length; i++){

		/*if (highlighted= true){
			return title;
			renderRecipe();
		}else{
			alert("noooooo");
		}*/

                


	console.log('Recipes: ', recipesArray);

}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
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

