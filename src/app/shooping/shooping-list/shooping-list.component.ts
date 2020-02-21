import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {
	ingredients : Ingredient[] = [new Ingredient('TOMATE', 5), new Ingredient('EGGS',9)];
  	constructor() { }

  	ngOnInit() {
  	}

  	addNewIngredient(ingredientData : Ingredient) {
  		this.ingredients.push(ingredientData);
  	}

}
