import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-default bg-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">Recipe Book</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shopping List</a>
            </li>
          </ul>
          <ul class="nav navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" role="button"
                >Manage <span class="caret"></span
              ></a>
              <ul class="dropdown-menu ">
                <li><a href="#" class="dropdown-item">Save Data</a></li>
                <li><a href="#" class="dropdown-item">Fetch Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
