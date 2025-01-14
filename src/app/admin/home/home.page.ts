import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  menuOpen = false;
  opciones = [
    {
      nombre: 'Gestionar productos',
      imagen: 'assets/Images/product-management.png',
      ruta: '/gestion-productos',
    },
    {
      nombre: 'Gestionar usuarios',
      imagen: 'assets/Images/user-management.png',
      ruta: '/gestion-usuarios',
    },
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  carrito() {
    this.router.navigate(['/carrito']);
  }

  navigateTo(ruta: string) {
    this.router.navigate([ruta]);
  }
}
