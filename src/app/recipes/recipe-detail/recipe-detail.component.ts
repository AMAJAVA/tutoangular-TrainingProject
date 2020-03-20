import { Component, OnInit, Input} from '@angular/core';
import { Recipe} from '../recipe.model'
import { ShoopingListService } from '../../shooping/shooping-list.service'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	@Input() recipeDetailToShow : Recipe ;

	constructor(private shoopingListService : ShoopingListService) {
	}

	ngOnInit() {

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
}
