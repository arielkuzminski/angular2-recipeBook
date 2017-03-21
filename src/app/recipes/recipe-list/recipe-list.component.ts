import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg');
  constructor() { }

  ngOnInit() {
  }

}
