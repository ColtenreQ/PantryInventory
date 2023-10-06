import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PantryInventory';

  currentCategory: string = "all";

  moveCategory(value: string) {
    this.currentCategory = value;
  }
}
