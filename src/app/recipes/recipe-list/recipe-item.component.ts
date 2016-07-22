import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe";
import {ROUTER_DIRECTIVES} from "@angular/router";



@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;

}
