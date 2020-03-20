import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


@Injectable()
export class ShoopingListService {
	private ingredients : Ingredient[] = [
		new Ingredient('TOMATE', 5),
		new Ingredient('EGGS',9)
	];
	private newIngredientEvent : EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  	constructor() { }

  	getIngredient(){
  		return this.ingredients.slice();
  	}

  	addNewIngredient(newIngredient : Ingredient) {
  		this.ingredients.push(newIngredient);
      // We should emit the event that the table has been modified
  		this.newIngredientEvent.emit(this.ingredients.slice());
  	}

  	getNewIngredientEvent() {
  		return this.newIngredientEvent;
  	}
}
