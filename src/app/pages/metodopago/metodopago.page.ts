import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.page.html',
  styleUrls: ['./metodopago.page.scss'],
  standalone: false,
})
export class MetodopagoPage implements OnInit {
  showToast = false; // Variable para controlar la visibilidad del toast

  constructor() {}

  ngOnInit() {}

  processPayment() {
    // Activar el toast
    this.showToast = true;

    // Mensaje en la consola
    console.log('El pago se ha realizado exitosamente.');

    // Opcional: Cerrar el toast manualmente después del tiempo configurado
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}

