import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute) { }
  recipeId : number;
  editMode : boolean = false;

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        if (params['recipeId'] != null) {
          this.recipeId = +params['recipeId'];
          this.editMode = true;
        }
        console.log(this.editMode);
      }
    );
  }

}
