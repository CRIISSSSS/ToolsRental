import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: false,
})
export class DetalleProductoPage {
  herramienta: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.herramienta = nav?.extras?.state?.["herramienta"];

    if (!this.herramienta) {
      console.error('No se pasaron datos al navegar');
    }
  }
}
