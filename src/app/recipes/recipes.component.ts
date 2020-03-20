import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService} from './recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
	recipeToShow : Recipe;
	constructor(private recipeService : RecipeService) { }

	ngOnInit() {
		// need to subscribe to the emmetter to get informed about changes
		this.recipeService.getRecipeToShow().subscribe(
			(recipe : Recipe) => {
				this.recipeToShow = recipe;
			}
		);
	}
}
