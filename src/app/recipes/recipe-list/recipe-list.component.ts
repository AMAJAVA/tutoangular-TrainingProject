import { Component, OnInit } from '@angular/core';
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
  		)
  ];
  constructor() { }

  ngOnInit() {
  }

}
