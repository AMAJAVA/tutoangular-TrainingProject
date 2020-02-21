import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
  	new Recipe('Tarte au citron',
  				'Une pâtisserie incontournable, une tarte acidulée… Bref, un dessert tout simplement excellent !',
  			    'https://static.cuisineaz.com/240x192/i139868-.jpeg'
  		),
    new Recipe('Tarte aux pommes',
          'Une pâtisserie incontournable, une tarte acidulée… Bref, un dessert tout simplement excellent !',
            'https://assets.afcdn.com/recipe/20180705/80308_w600cxt0cyt0cxb3888cyb5184.jpg'
      )
  ];

  @Output('recipeWasSelected') recipeToShowDetail : EventEmitter<Recipe> = new EventEmitter <Recipe>()

  constructor() {
  }

  ngOnInit() {
  }

  onSetRecipe (recipeDetail : Recipe) {
    this.recipeToShowDetail.emit(recipeDetail);
  }
}
