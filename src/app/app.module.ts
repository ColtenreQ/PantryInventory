import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { FooterComponent } from './general/footer/footer.component';
import { FoodCategoryComponent } from './pantry/food-category/food-category.component';
import { FoodListComponent } from './pantry/food-list/food-list.component';
import { FoodItemComponent } from './pantry/food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FoodCategoryComponent,
    FoodListComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
