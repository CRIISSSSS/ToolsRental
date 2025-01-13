import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  menuOpen: boolean = false;

  constructor(private router: Router) {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  carpinteria() {
    this.router.navigate(['/carpinteria']);
  }

  carrito() {
    this.router.navigate(['/carrito']);
  }

  demolicion(){
    this.router.navigate(['/demolicion']);
  }
  
  pintura(){
    this.router.navigate(['/pintura']);
  }
}