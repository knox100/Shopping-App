import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <app-recipes></app-recipes>
        <app-shopping-list></app-shopping-list>
      </div>
    </div>
  </div>`,
})
export class AppComponent {
  title = 'demo application';
}
