import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <img src="" alt="" class="img-responsive" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>Recipe Name</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle ">
            Manage Recipe <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#">Add to Shopping List</a></li>
            <li><a href="#">Edit Recipe</a></li>
            <li><a href="#">Delete Recipe</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">Description</div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">Ingredients</div>
    </div>
  `,
  styles: [],
})
export class RecipeDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
