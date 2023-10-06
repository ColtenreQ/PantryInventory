import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() navDirection = new EventEmitter<string>();

  navigateWithNavbar(value: string) {
    this.navDirection.emit(value);
  }
}
