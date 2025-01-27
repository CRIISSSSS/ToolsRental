import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private firebaseSvc: FirebaseService) {}

  ngOnInit() {}

  async login() {
    if (this.email && this.password) {
      try {
        const user: User = {
          email: this.email, password: this.password,
      
        };
        const response = await this.firebaseSvc.signIn(user);
        console.log('Inicio de sesión exitoso', response);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Correo o contraseña incorrectos.');
      }
    } else {
      alert('Por favor, ingrese un correo y contraseña válidos.');
    }
  }

  registro() {
    this.router.navigate(['/registrar']);
  }
}
