import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDetailsComponent } from './recipes-details.component';

@NgModule({
  declarations: [RecipesDetailsComponent],
  imports: [CommonModule],
  exports: [RecipesDetailsComponent],
})
export class RecipeDetailsModule {}
