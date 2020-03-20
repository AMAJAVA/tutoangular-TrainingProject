import { Injectable, EventEmitter } from '@angular/core';
import { Recipe} from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'


@Injectable()
export class RecipeService {
	private recipes : Recipe[] = [
	  	new Recipe('Tarte au citron',
	  				'Une pâtisserie incontournable, une tarte acidulée… Bref, un dessert tout simplement excellent !',
	  			    'https://static.cuisineaz.com/240x192/i139868-.jpeg',
	  			    [
						new Ingredient('BREAD', 2),
						new Ingredient('OIL',9)
					]

	  		),
	    new Recipe('Tarte aux pommes',
	          		'Une pâtisserie incontournable, une tarte acidulée… Bref, un dessert tout simplement excellent !',
	            	'https://assets.afcdn.com/recipe/20180705/80308_w600cxt0cyt0cxb3888cyb5184.jpg',
	            	 [
						new Ingredient('SUGGAR', 5),
						new Ingredient('MILK',19)
				 	]
	      )
	];

	private recipeToShow : EventEmitter<Recipe> = new EventEmitter<Recipe>();
  	constructor() { }

  	getRecipes() {
  		return this.recipes.slice();
  	}

  	getRecipeToShow(){
  		return this.recipeToShow;
  	}

  	setRecipeToShow(recipe: Recipe) {
  		this.recipeToShow.emit(recipe);
  	}
}
