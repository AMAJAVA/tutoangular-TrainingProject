import { Component, OnInit, Input} from '@angular/core';
import { Recipe} from '../recipe.model'
import { ShoopingListService } from '../../shooping/shooping-list.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipeDetailToShow : Recipe ;

	constructor(private shoopingListService : ShoopingListService,
		private currentRoute: ActivatedRoute,
		private router : Router,
		private recipeService : RecipeService) {
	}

	ngOnInit() {
		this.currentRoute.params.subscribe(
			(recipeDetailParams : Params) =>{
				this.recipeDetailToShow = this.recipeService.getRecipeById(+recipeDetailParams['recipeId']);
			}
		);
	}

	addToShoopingList() {
		for (let ingredient of this.recipeDetailToShow.ingredients) {
			this.shoopingListService.addNewIngredient(ingredient);
		}
		/*
		// could work if the getIngredient() function return the reference and not a copie of the variable
		this.shoopingListService.getIngredient().push(...this.recipeDetailToShow.ingredients);
		*/
	}

	editRecipe() {
		this.router.navigate(['edit'], {relativeTo : this.currentRoute});
	}
}
