import { Injectable } from '@angular/core';
import { foodItem } from '../models/foodItem.model';

@Injectable({
  providedIn: 'root'
})
export class PantryService {
  foodItems: foodItem[] = [
    new foodItem("Beets", 3, "vegetable"),
    new foodItem("Orange", 4, "fruit"),
    new foodItem("Banana", 1, "fruit"),
    new foodItem("Oreo", 14, "candy"),
    new foodItem("Carrots", 27, "vegetable"),
    new foodItem("Apple", 2, "fruit"),
    new foodItem("Strawberry", 81, "fruit")
  ]

  getFoodItems(foodType: String) {
    console.log("Food is displayed");
    return this.foodItems.slice();

  }

  constructor() { }
}
