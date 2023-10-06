import { Component } from '@angular/core';
import { foodItem } from 'src/app/models/foodItem.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})

export class FoodItemComponent {
  foodItems: foodItem[] = [
    new foodItem("Beets", 3, "vegetable"),
    new foodItem("Orange", 4, "fruit"),
    new foodItem("Banana", 1, "fruit"),
    new foodItem("Oreo", 14, "candy"),
  ]
}
