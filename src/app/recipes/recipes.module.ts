import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeItemComponent } from './recipe-item.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  exports: [RecipesComponent],
  imports: [CommonModule],
})
export class RecipesModule {}
