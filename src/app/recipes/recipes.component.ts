import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list></app-recipe-list>
      </div>
      <div class="col-md-7">
        <app-recipe-details></app-recipe-details>
      </div>
    </div>
  `,
  styles: [],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
