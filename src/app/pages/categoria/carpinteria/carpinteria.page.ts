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
      nombre: 'Martillo',
      imagen: 'assets/Images/martillo.webp',
    },
    {
      nombre: 'Serrucho electrico',
      imagen: 'assets/Images/serruchoelectrico.jpg',
    },
    {
      nombre: 'Taladro',
      imagen: 'assets/Images/taladro.jpg',
    },
    {
      nombre: 'serrucho',
      imagen: 'assets/Images/serrucho.png',
    },
  ];

  constructor(private router: Router) {}

  carrito() {
    this.router.navigate(['/carrito']);
  }

}

