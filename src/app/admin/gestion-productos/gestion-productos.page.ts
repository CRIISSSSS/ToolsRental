import { Component } from '@angular/core';

export interface Herramienta {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  disponibilidad: string;
}

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
    ],
    Carpintería: [],
    Pintura: [],
  };

  herramientasFiltradas: Herramienta[] = [...this.productos[this.categoriaActual]];

  nuevoProducto: Partial<Herramienta> = {
    nombre: '',
    descripcion: '',
    precio: undefined,
    disponibilidad: 'Disponible',
  };

  mostrarFormulario = false;
  formHerramienta: Partial<Herramienta> = {};
  modoEdicionProducto = false;

  constructor() {
    this.cargarDesdeLocalStorage();
  }

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
        this.guardarEnLocalStorage();
      }
    }
    this.modoEdicionProducto = false;
    this.formHerramienta = {};
  }

  eliminarProducto(id: number) {
    this.productos[this.categoriaActual] = this.productos[this.categoriaActual].filter(
      (h) => h.id !== id
    );
    this.herramientasFiltradas = [...this.productos[this.categoriaActual]];
    this.guardarEnLocalStorage();
    alert('Este objeto se eliminó');
  }

  onFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.nuevoProducto.imagen = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  agregarNuevoProducto() {
    if (
      this.nuevoProducto.nombre &&
      this.nuevoProducto.descripcion &&
      this.nuevoProducto.precio &&
      this.nuevoProducto.imagen
    ) {
      const categoria = this.categoriaActual;
      const nuevoId = this.productos[categoria]?.length
        ? Math.max(...this.productos[categoria].map((p) => p.id)) + 1
        : 1;

      const producto: Herramienta = {
        id: nuevoId,
        nombre: this.nuevoProducto.nombre,
        descripcion: this.nuevoProducto.descripcion,
        precio: this.nuevoProducto.precio,
        imagen: this.nuevoProducto.imagen,
        disponibilidad: 'Disponible',
      };

      this.productos[categoria].push(producto);
      this.herramientasFiltradas = [...this.productos[categoria]];
      this.guardarEnLocalStorage();
      this.nuevoProducto = {
        nombre: '',
        descripcion: '',
        precio: undefined,
        disponibilidad: 'Disponible',
      };
      this.mostrarFormulario = false;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  private cargarDesdeLocalStorage() {
    const data = localStorage.getItem('productos');
    if (data) {
      this.productos = JSON.parse(data);
      this.herramientasFiltradas = [...this.productos[this.categoriaActual]];
    }
  }
}
