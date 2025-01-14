import { Component } from '@angular/core';
type Herramienta = {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  disponibilidad: string;
};

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.page.html',
  styleUrls: ['./gestion-productos.page.scss'],
  standalone: false,
})
export class GestionProductosPage {
  categorias = [
    { nombre: 'Demolición' },
    { nombre: 'Carpintería' },
    { nombre: 'Pintura' },
  ];

  categoriaActual = 'Demolición';

  productos: { [key: string]: Herramienta[] } = {
    Demolición: [
      {
        id: 1,
        nombre: 'Mazo',
        imagen: 'assets/Images/mazo.jpg',
        descripcion: 'Mazo de gran peso para trabajos de demolición.',
        precio: 20,
        disponibilidad: 'Disponible',
      },
      {
        id: 2,
        nombre: 'Cincel',
        imagen: 'assets/Images/cincel.jpg',
        descripcion: 'Cincel de acero endurecido para demolición de concreto.',
        precio: 15,
        disponibilidad: 'Disponible',
      },
    ],
    Carpintería: [
      {
        id: 1,
        nombre: 'Martillo',
        imagen: 'assets/Images/martillo.webp',
        descripcion: 'Martillo de acero forjado ideal para trabajos de carpintería.',
        precio: 10,
        disponibilidad: 'Disponible',
      },
    ],
    Pintura: [
      {
        id: 1,
        nombre: 'Brocha',
        imagen: 'assets/Images/brocha.jpg',
        descripcion: 'Brocha de alta calidad para pintar superficies grandes.',
        precio: 8,
        disponibilidad: 'Disponible',
      },
    ],
  };
  formHerramienta: Partial<Herramienta> = {};
    modoEdicionProducto = false;

    modificarProducto(herramienta: Herramienta) {
      this.formHerramienta = { ...herramienta };
      this.modoEdicionProducto = true;
  }
  guardarProducto() {
    if (this.modoEdicionProducto && this.formHerramienta.id) {
      const categoria = this.categoriaActual;
      const index = this.productos[categoria].findIndex((h) => h.id === this.formHerramienta.id);
      if (index !== -1) {
        this.productos[categoria][index] = { ...this.formHerramienta } as Herramienta;
  
        this.herramientasFiltradas = [...this.productos[categoria]];
      }
    }
    this.modoEdicionProducto = false;
    this.formHerramienta = {};
  }
  herramientasFiltradas: Herramienta[] = [...this.productos[this.categoriaActual]];

  cambiarCategoria(categoria: string) {
    this.categoriaActual = categoria;
    this.herramientasFiltradas = [...this.productos[categoria]];
  }

  filtrarProductos(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    this.herramientasFiltradas = this.productos[this.categoriaActual].filter((h) =>
      h.nombre.toLowerCase().includes(query)
    );
  }

  eliminarProducto(id: number) {
    alert('Este objeto se eliminó');
    this.herramientasFiltradas = this.herramientasFiltradas.filter((h) => h.id !== id);
  }
}