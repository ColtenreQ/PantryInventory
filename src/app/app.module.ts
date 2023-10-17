import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { FooterComponent } from './general/footer/footer.component';
import { FoodCategoryComponent } from './pantry/food-category/food-category.component';
import { FoodListComponent } from './pantry/food-list/food-list.component';
import { RouterModule } from '@angular/router';
import { PantryHomeComponent } from './pantry/pantry-home/pantry-home.component';
import { ItemListComponent } from './shoppingList/item-list/item-list.component';
import { AboutComponent } from './general/about/about.component';
import { AddItemComponent } from './shoppingList/add-item/add-item.component';
import { ItemListHomeComponent } from './shoppingList/item-list-home/item-list-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FoodCategoryComponent,
    FoodListComponent,
    PantryHomeComponent,
    AboutComponent,
    AddItemComponent,
    ItemListHomeComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/pantry-list', pathMatch: "full"},
      {path: 'pantry-list', component: PantryHomeComponent},
      {path: 'shopping-list', component: ItemListHomeComponent},
      {path: 'about', component: AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
