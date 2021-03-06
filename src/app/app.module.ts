import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoopingComponent } from './shooping/shooping.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoopingListComponent } from './shooping/shooping-list/shooping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoopingEditComponent } from './shooping/shooping-list/shooping-edit/shooping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoopingListService } from './shooping/shooping-list.service';
import { RecipeDetailDefaultComponent } from './recipes/recipe-detail-default/recipe-detail-default.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoopingComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoopingListComponent,
    RecipeItemComponent,
    ShoopingEditComponent,
    DropdownDirective,
    RecipeDetailDefaultComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
