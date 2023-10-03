import { Component } from '@angular/core';
import { foodCategory } from 'src/app/models/foodCategory.model';

@Component({
  selector: 'app-food-category',
  templateUrl: './food-category.component.html',
  styleUrls: ['./food-category.component.css']
})
export class FoodCategoryComponent {

  foodCategories: foodCategory[] = [
    new foodCategory("Vegetables", "A collection of vegetables"),
    new foodCategory("fruit", "A collection of fruit"),
    new foodCategory("Meat", "A collection of meat food"),
    new foodCategory("Grain", "A collection of grains")
  ]
}
