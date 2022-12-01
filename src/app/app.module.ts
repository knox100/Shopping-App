import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RecipeDetailsModule } from './recipes/recipe-details/recipe-details.module';
import { RecipeItemModule } from './recipes/recipe-list/recipe-item/recipe-item.module';
import { RecipeListModule } from './recipes/recipe-list/recipe-list.module';
import { RecipesModule } from './recipes/recipes.module';

import { ShoppingEditModule } from './shopping-list/shopping-edit/shopping-edit.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    ShoppingListModule,
    ShoppingEditModule,
    RecipesModule,
    RecipeDetailsModule,
    RecipeListModule,
    RecipeItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
