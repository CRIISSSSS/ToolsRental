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
      nombre: 'Mazo',
      imagen: 'assets/Images/mazo.jpg',
    },
    {
      nombre: 'Cincel',
      imagen: 'assets/Images/cincel.jpg',
    },
    {
      nombre: 'Barreta',
      imagen: 'assets/Images/barreta.png',
    },
    {
      nombre:'Roto martillo',
      imagen:'assets/Images/rotomartillo.jpg'
    }
  ];

  constructor(private router: Router) {}

  carrito() {
    this.router.navigate(['/carrito']);
  }
}
