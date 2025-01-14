import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false,
})
export class RegistrarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  palHome(){
    this.router.navigate(['/home']);
  }
}