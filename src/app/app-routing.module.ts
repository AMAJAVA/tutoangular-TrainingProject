import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import Component
import { RecipesComponent } from './recipes/recipes.component'
import { ShoopingListComponent } from './shooping/shooping-list/shooping-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailDefaultComponent } from './recipes/recipe-detail-default/recipe-detail-default.component'
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component'

const routes: Routes = [
	{path: '', redirectTo : '/recipes', pathMatch : 'full'},
	{path: 'recipes',
    component : RecipesComponent,
    children : [
      {path: '' , component : RecipeDetailDefaultComponent, data : {defaultMessage : 'Please select a recipe'}},
      {path:'new', component : EditRecipeComponent},
      {path:':recipeId/edit', component : EditRecipeComponent},
      {path: ':recipeId', component : RecipeDetailComponent}
    ]
  },
	{path : 'shooping-list', component : ShoopingListComponent},
  {path:'**', redirectTo:'/recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
