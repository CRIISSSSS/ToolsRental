import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pintura',
  templateUrl: './pintura.page.html',
  styleUrls: ['./pintura.page.scss'],
  standalone: false,
})
export class PinturaPage {
  herramientas = [
    {
      id: 1,
      nombre: 'Brocha',
      imagen: 'assets/Images/brocha.jpg',
      descripcion: 'Brocha de alta calidad para pintar superficies grandes.',
      precio: 8,
      disponibilidad: 'Disponible',
    },
    {
      id: 2,
      nombre: 'Rodillo',
      imagen: 'assets/Images/rodillo.jpg',
      descripcion: 'Rodillo de pintura para cubrir áreas amplias de forma rápida.',
      precio: 12,
      disponibilidad: 'Disponible',
    },
    {
      id: 3,
      nombre: 'Bandeja',
      imagen: 'assets/Images/bandeja.jpg',
      descripcion: 'Bandeja para cargar pintura de manera fácil y cómoda.',
      precio: 5,
      disponibilidad: 'Disponible',
    },
    {
      id: 4,
      nombre: 'Compresor',
      imagen: 'assets/Images/compresor.jpg',
      descripcion: 'Compresor de aire para aplicaciones de pintura profesional.',
      precio: 40,
      disponibilidad: 'No disponible',
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
