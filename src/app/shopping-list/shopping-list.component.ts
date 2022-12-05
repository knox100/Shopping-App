import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  template: `
    <div class="row">
      <div class="col-xs-10">
        <app-shopping-edit></app-shopping-edit>
        <hr />
        <ul class="lis-group">
          <a class="lsit-group-item" style="cursor: pointer;"> </a>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
