import { Component } from '@angular/core';
import { PantryService } from '../pantry.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent {

  constructor(private pantryService: PantryService) {}

  foodList = this.pantryService.getPantryItemsByType("Fruit");
}
