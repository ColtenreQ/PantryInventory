import { Injectable } from '@angular/core';
import { foodItem } from '../models/foodItem.model';

@Injectable({
  providedIn: 'root'
})
export class PantryService {

  pantryItems = [
    new foodItem("Banana", 27, "Fruit"),
    new foodItem("Beet", 38, "Vegetable"),
    new foodItem("Rice", 120, "Grain"),
    new foodItem("Chicken", 3, "Meat"),
    new foodItem("Pork", 8, "Meat"),
    new foodItem("Steak", 4, "Meat"),
    new foodItem("Apple", 15, "Fruit"),
  ]

  getPantryItems() {
    return this.pantryItems;
  }
}
