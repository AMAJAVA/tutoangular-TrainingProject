import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoopingListService } from '../shooping-list.service'

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})

export class ShoopingListComponent implements OnInit {
	ingredients : Ingredient[];
  constructor(private shoopingListService : ShoopingListService) { }

  ngOnInit() {
    this.ingredients = this.shoopingListService.getIngredient();

    this.shoopingListService.getNewIngredientEvent().subscribe(
      (newIngredients : Ingredient[]) => {
           this.ingredients = newIngredients;
      }
    );
  }
}
