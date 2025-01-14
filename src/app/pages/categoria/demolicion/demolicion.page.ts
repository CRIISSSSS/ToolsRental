import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demolicion',
  templateUrl: './demolicion.page.html',
  styleUrls: ['./demolicion.page.scss'],
  standalone: false,
})
export class DemolicionPage {
  herramientas = [
    {
      id: 1,
      nombre: 'Mazo',
      imagen: 'assets/Images/mazo.jpg',
      descripcion: 'Mazo de gran peso para trabajos de demolición.',
      precio: 20,
      disponibilidad: 'Disponible',
    },
    {
      id: 2,
      nombre: 'Cincel',
      imagen: 'assets/Images/cincel.jpg',
      descripcion: 'Cincel de acero endurecido para demolición de concreto.',
      precio: 15,
      disponibilidad: 'Disponible',
    },
    {
      id: 3,
      nombre: 'Barreta',
      imagen: 'assets/Images/barreta.png',
      descripcion: 'Barreta de acero forjado, ideal para abrir ranuras en concreto.',
      precio: 18,
      disponibilidad: 'No disponible',
    },
    {
      id: 4,
      nombre: 'Roto martillo',
      imagen: 'assets/Images/rotomartillo.jpg',
      descripcion: 'Roto martillo de gran potencia para demoliciones rápidas.',
      precio: 50,
      disponibilidad: 'Disponible',
    },
  ];

  constructor(private router: Router) {}

  carrito() {
    this.router.navigate(['/carrito']);
  }

  verDetalle(herramienta: any) {
    this.router.navigate(['/detalle-producto'], {
      state: { herramienta },
    });
  }
}
