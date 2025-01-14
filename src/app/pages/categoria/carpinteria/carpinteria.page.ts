import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carpinteria',
  templateUrl: './carpinteria.page.html',
  styleUrls: ['./carpinteria.page.scss'],
  standalone: false,
})
export class CarpinteriaPage {
  herramientas = [
    {
      id: 1,
      nombre: 'Martillo',
      imagen: 'assets/Images/martillo.webp',
      descripcion: 'Martillo de acero forjado ideal para trabajos de carpintería.',
      precio: 10,
      disponibilidad: 'Disponible',
    },
    {
      id: 2,
      nombre: 'Serrucho eléctrico',
      imagen: 'assets/Images/serruchoelectrico.jpg',
      descripcion: 'Serrucho eléctrico con gran potencia y precisión.',
      precio: 25,
      disponibilidad: 'Disponible',
    },
    {
      id: 3,
      nombre: 'Taladro',
      imagen: 'assets/Images/taladro.jpg',
      descripcion: 'Taladro de alta potencia con múltiples accesorios.',
      precio: 15,
      disponibilidad: 'No disponible',
    },
    {
      id: 4,
      nombre: 'Serrucho',
      imagen: 'assets/Images/serrucho.png',
      descripcion: 'Serrucho manual con mango ergonómico.',
      precio: 8,
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

