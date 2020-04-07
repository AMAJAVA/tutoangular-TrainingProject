import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-default',
  templateUrl: './recipe-detail-default.component.html',
  styleUrls: ['./recipe-detail-default.component.css']
})
export class RecipeDetailDefaultComponent implements OnInit {
  recipeDetailMessage : string;
  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit() {
   this.recipeDetailMessage = this.activeRoute.snapshot.data['defaultMessage'];
  }

}
