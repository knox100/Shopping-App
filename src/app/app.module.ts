import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

import { RecipesModule } from './recipes/recipes.module';

import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, ShoppingListModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
