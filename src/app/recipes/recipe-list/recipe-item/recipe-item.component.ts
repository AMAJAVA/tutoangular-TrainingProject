import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input()  reciptItem : Recipe;
	@Output() recipeToShowDetail : EventEmitter<void> = new EventEmitter <void>()
	constructor() { }

	ngOnInit() {
	}

	onShowDetail() {
		// We don't need to pass the Recipe because the parent component already listening to that
		this.recipeToShowDetail.emit();
	}
}
