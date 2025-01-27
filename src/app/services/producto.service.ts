import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosCollection = collection(this.firestore, 'Productos');

  constructor(private firestore: Firestore) {}

  // ✅ Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return collectionData(this.productosCollection, { idField: 'id' }) as Observable<Producto[]>;
  }

  // ✅ Obtener un producto por ID
  async getProductoById(id: string): Promise<Producto | null> {
    const productoRef = doc(this.firestore, `productos/${id}`);
    const productoSnap = await getDoc(productoRef);
    if (productoSnap.exists()) {
      return { id, ...(productoSnap.data() as Omit<Producto, 'id'>) };
    }
    console.error('⚠️ No se encontró el producto con ID:', id);
    return null;
  }
}
