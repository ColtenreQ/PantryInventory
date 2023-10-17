import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListHomeComponent } from './item-list-home.component';

describe('ItemListHomeComponent', () => {
  let component: ItemListHomeComponent;
  let fixture: ComponentFixture<ItemListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListHomeComponent]
    });
    fixture = TestBed.createComponent(ItemListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
