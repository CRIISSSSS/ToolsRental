import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false,
})
export class RegistrarPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private firebaseSvc: FirebaseService) {}

  ngOnInit() {}

  async registro() {
    if (this.email && this.password) {
      try {
        // Crear usuario con email y contraseña
        const res = await this.firebaseSvc.signUp({
          email: this.email,
          password: this.password
          
        });

        alert('Registro exitoso.');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al registrar:', error);
        alert('Hubo un error al registrar el usuario.');
      }
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
