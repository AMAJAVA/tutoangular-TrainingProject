import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../../recipe.model'
import { RecipeService} from '../../recipe.service'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input()  reciptItem : Recipe;
	constructor(private recipeService : RecipeService,
    private activeRoute : ActivatedRoute,
    private router : Router) { }

	ngOnInit() {
	}

	onShowDetail() {
    this.router.navigate(
      [this.reciptItem.id],
      {relativeTo : this.activeRoute,
      queryParamsHandling : 'preserve'}
    );
	}
}
