import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Herramienta {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  disponibilidad: string;
}

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
  standalone: false,
})
export class AddProductoPage {
  nuevoProducto: Partial<Herramienta> = {
    nombre: '',
    descripcion: '',
    precio: undefined,
    disponibilidad: 'Disponible',
  };

  constructor(private router: Router) {}

  // Función que se ejecuta cuando se elige una imagen
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

  // Función para agregar el producto nuevo
  agregarNuevoProducto() {
    // Recuperamos el objeto 'productos' desde el almacenamiento local
    const productos = JSON.parse(localStorage.getItem('productos') || '{}');

    // Aseguramos que 'productos[categoria]' sea un arreglo de 'Herramienta'
    const categoria = 'Demolición'; // Por simplicidad
    const productosCategoria: Herramienta[] = productos[categoria] || [];

    // Obtenemos el siguiente id disponible
    const nuevoId = productosCategoria.length
      ? Math.max(...productosCategoria.map((p: Herramienta) => p.id)) + 1
      : 1;

    // Creamos el nuevo producto con el id generado
    const nuevo = { ...this.nuevoProducto, id: nuevoId };

    // Añadimos el nuevo producto al arreglo de la categoría
    productos[categoria] = [...productosCategoria, nuevo];

    // Guardamos los productos actualizados en el almacenamiento local
    localStorage.setItem('productos', JSON.stringify(productos));

    // Redirigimos a la página de gestión de productos
    this.router.navigate(['/gestion-productos']);
  }
}
