import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [CommonModule],
})
export class NavbarComponent {
  isNavbarMenuVisible = false;

  toggleNavbarMenu() {
    this.isNavbarMenuVisible = !this.isNavbarMenuVisible;
  }
}
