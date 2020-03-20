import { Component, OnInit,ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
import { ShoopingListService} from '../../shooping-list.service'


@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})

export class ShoopingEditComponent implements OnInit {
  @ViewChild('ingredientName', {static : false}) ingredientName : ElementRef ;
  @ViewChild('ingredientAmount', {static : false}) ingredientAmount : ElementRef ;

  constructor(private shoopingListService : ShoopingListService) {
  }

  ngOnInit() {
  }

  onAddIngredient() {
  	this.shoopingListService.addNewIngredient(new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      ))
  	this.ingredientName.nativeElement.value = '';
  	this.ingredientAmount.nativeElement.value = '';
  }
}
