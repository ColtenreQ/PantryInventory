import { Component } from '@angular/core';
import { foodItem } from 'src/app/models/foodItem.model';
import { PantryService } from '../pantry.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})

export class FoodItemComponent {

  constructor(private PantryService: PantryService) {}

  foodItems: foodItem[] = [];

  ngOnInit() {
    this.foodItems = this.PantryService.getFoodItems("Vegetables");
  }

}
