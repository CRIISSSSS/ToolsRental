import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra-gruesa',
  templateUrl: './obra-gruesa.page.html',
  styleUrls: ['./obra-gruesa.page.scss'],
  standalone: false,
})
export class ObraGruesaPage {
  herramientas = [
    {
      id: 1,
      nombre: 'Placa compactadora',
      imagen: 'assets/Images/placacompactadora.jpg',
      descripcion: 'Se utiliza para ayudar a compactar el hormigón. Consiste en un aguja de acero que se sumerge desde la superficie, en la mezcla vertida de hormigón. ',
      precio: 1000,
      disponibilidad: 'Disponible',
    },
    {
      id: 2,
      nombre: 'Trompo mezclador de cemento',
      imagen: 'assets/Images/trompocemento.jpg',
      descripcion: 'El trompo es una máquina empleada en la construcción y albañilería para obtener la mezcla de cemento, áridos y grava en masa homogénea de hormigón o mortero de uso en albañilería..',
      precio: 50000,
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
