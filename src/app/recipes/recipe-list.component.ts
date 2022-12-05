import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <div class="btn btn-success ">New Recipe</div>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 list-group">
        <a
          href="#"
          class="list-group-item  clearfix"
          *ngFor="let recipe of recipes"
        >
          <div class="float-start">
            <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
            <p class="list-group-item-text">{{ recipe.description }}</p>
          </div>
          <span class="float-end">
            <img
              [src]="recipe.imagePath"
              alt="{{ recipe.name }}"
              class="img-responsive"
              style="max-height: 70px;"
            />
          </span>
        </a>
        <app-recipe-item></app-recipe-item>
      </div>
    </div>
  `,

  styles: [],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://hips.hearstapps.com/hmg-prod/images/grilled-corn-salad2-1650570859.jpg?crop=0.682xw:1.00xh;0.160xw,0&resize=640:*'
    ),
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://hips.hearstapps.com/hmg-prod/images/grilled-corn-salad2-1650570859.jpg?crop=0.682xw:1.00xh;0.160xw,0&resize=640:*'
    ),
  ];

  ngOnInit(): void {}
}
