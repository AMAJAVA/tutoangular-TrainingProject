import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoopingListService } from '../shooping-list.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})

export class ShoopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientSubjectSubscription: Subscription;

  constructor(private shoopingListService : ShoopingListService) { }
  ngOnInit() {
    this.ingredients = this.shoopingListService.getIngredient();

    this.ingredientSubjectSubscription = this.shoopingListService.newIngredientSubject.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientSubjectSubscription.unsubscribe();
  }
}
