import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg', []),
    new Recipe('Dummy3', 'Dummy3', 'http://www.pi-cube.com/wp-content/uploads/2015/04/team-placeholder.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
