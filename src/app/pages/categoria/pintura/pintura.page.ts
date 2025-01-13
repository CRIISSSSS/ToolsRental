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
      nombre: 'Brocha',
      imagen: 'assets/Images/brocha.jpg',
    },
    {
      nombre: 'Rodillo',
      imagen: 'assets/Images/rodillo.jpg',
    },
    {
      nombre: 'Bandeja',
      imagen: 'assets/Images/bandeja.jpg',
    },
    {
      nombre: 'Compresor',
      imagen: 'assets/Images/compresor.jpg',
    },
  ];

  constructor(private router: Router) {}

  carrito() {
    this.router.navigate(['/carrito']);
  }
}
