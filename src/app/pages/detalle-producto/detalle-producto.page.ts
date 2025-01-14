import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: false,
})
export class DetalleProductoPage {
  herramienta: any; // Detalles del producto
  alertaActiva = false; // Controla la visibilidad de la alerta

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.herramienta = nav?.extras?.state?.["herramienta"];
  }

  anadirAlCarrito() {
    console.log('Producto añadido al carrito:', this.herramienta);

    // Activa la alerta
    this.alertaActiva = true;
  }

  cerrarAlerta() {
    // Desactiva la alerta
    this.alertaActiva = false;
  }
}
