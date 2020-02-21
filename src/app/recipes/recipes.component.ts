import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
	recipeToShow : Recipe;
	constructor() { }

	ngOnInit() {
	}

	setRecipeToShow(recipeToShow : Recipe) {
		console.log('recipe' + recipeToShow.name);
		this.recipeToShow = recipeToShow;
	}
}
