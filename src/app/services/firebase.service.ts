import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Iniciar sesión
  async signIn(user: User): Promise<any> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      throw error;
    }
  }

  // Registrar usuario
  async signUp(user: User): Promise<any> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      throw error;
    }
  }

  // Guardar datos adicionales del usuario
  async saveUserData(
    uid: string | undefined,
    data: { nombre: string; email: string; direccion: string; anioNacimiento: number }
  ): Promise<void> {
    if (!uid) {
      throw new Error('UID no válido');
    }
    try {
      await this.firestore.collection('users').doc(uid).set(data);
    } catch (error) {
      throw error;
    }
  }

  // Cerrar sesión
  async signOut(): Promise<void> {
    await this.afAuth.signOut();
  }
}
