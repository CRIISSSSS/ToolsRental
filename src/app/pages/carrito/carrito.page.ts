import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false,
})
export class CarritoPage {
  carrito = [
    {
      nombre: 'Martillo',
      precio: 15000,
      imagen: 'assets/Images/martillo.webp',
    },
    {
      nombre: 'Mazo',
      precio: 31000,
      imagen: 'assets/Images/mazo.jpg',
    },
  ];

  subtotal = 0;
  iva = 0;
  total = 0;

  constructor(private router: Router) {
    this.calcularTotales();
  }

  calcularTotales() {
    this.subtotal = this.carrito.reduce((acc, item) => acc + item.precio, 0);
    this.iva = Math.round(this.subtotal * 0.19); // IVA del 19%
    this.total = this.subtotal + this.iva;
  }

  confirmarCompra() {
    // Navegar al método de pago con el total y productos seleccionados
    this.router.navigate(['/metodopago'], {
      state: { carrito: this.carrito, total: this.total },
    });
  }
}
