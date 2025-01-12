import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
  standalone: false,
})
export class LobbyPage implements OnInit {
  // Lista de categorías
  categorias = [
    {
      nombre: 'Pintura',
      imagen: 'assets/img/pintura.jpg',
    },
    {
      nombre: 'Demoliciones',
      imagen: 'assets/img/demoliciones.jpg',
    },
    {
      nombre: 'Terminaciones',
      imagen: 'assets/img/terminaciones.jpg',
    },
    {
      nombre: 'Construcción',
      imagen: 'assets/img/construccion.jpg',
    },
    {
      nombre: 'Electricidad',
      imagen: 'assets/img/electricidad.jpg',
    },
    {
      nombre: 'Jardinería',
      imagen: 'assets/img/jardineria.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
