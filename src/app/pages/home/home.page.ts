import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  menuOpen: boolean = false;

  categorias = [
    {
      nombre: 'Carpintería',
      imagen: 'assets/Images/carpinteria.jpg',
      ruta: '/carpinteria',
    },
    {
      nombre: 'Demolición',
      imagen: 'assets/Images/demolicion.jpg',
      ruta: '/demolicion',
    },
    {
      nombre: 'Pintura',
      imagen: 'assets/Images/pintura.jpg',
      ruta: '/pintura',
    },
    {
      nombre: 'Obra gruesa',
      imagen: 'assets/Images/obragruesa.jpg',
      ruta: '/obra-gruesa',
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
