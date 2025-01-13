import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      alert('Por favor, ingrese un correo y contraseña válidos.');
    }
  }
  registro(){
    this.router.navigate(['/registrar']);
  }
}