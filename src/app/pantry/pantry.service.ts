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

  getPantryItemsByType(type: string) {
    let tempPantryItems = []
    for(let item of this.pantryItems) {
      if(item.itemCategory == type) {
        tempPantryItems.push(item);
        console.log(tempPantryItems);

      }
    }
    return tempPantryItems;
  }
}
