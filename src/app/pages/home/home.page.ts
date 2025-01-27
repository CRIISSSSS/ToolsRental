import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService, Producto } from '../../services/producto.service';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false // ✅ Si es `false`, no debe tener `imports`
})
export class HomePage implements OnInit {
  menuOpen: boolean = false;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private toastController: ToastController,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.cargarProductos();
  }
  filtrarProductos(event: any) {
    const query = event.target.value.toLowerCase();
    this.productosFiltrados = this.productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(query) ||
        producto.descripcion.toLowerCase().includes(query)
    );
  }
  cargarProductos() {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data.map((producto) => {
        if (!producto.id) {
          console.error('⚠️ Producto sin ID detectado:', producto);
          return { ...producto, id: Math.random().toString(36).substr(2, 9) };
        }
        // ✅ Asegurar que `stock` tiene un valor predeterminado
        return { ...producto, stock: producto.stock ?? 0 };
      });
      this.productosFiltrados = this.productos;
      console.log('✅ Productos cargados:', this.productos);
    });
  }

  async agregarAlCarrito(producto: Producto) {
    if (!producto || !producto.id) {
      console.error('❌ El producto es inválido o no tiene un ID:', producto);
      return;
    }

    let carrito: { producto: Producto; cantidad: number }[] = await this.storage.get('carrito') || [];
    let index = carrito.findIndex((item) => item.producto?.id === producto.id);
    if (index !== -1) {
      carrito[index].cantidad++;
    } else {
      carrito.push({ producto, cantidad: 1 });
    }

    await this.storage.set('carrito', carrito);
    console.log('✅ Producto agregado al carrito:', producto);

    this.mostrarToast(`${producto.nombre} agregado al carrito`);
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'success',
      position: 'top',
    });
    await toast.present();
  }

  carrito() {
    this.router.navigate(['/carrito']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
