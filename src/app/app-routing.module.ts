import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'lobby',
    loadChildren: () => import('./pages/lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'metodopago',
    loadChildren: () => import('./pages/metodopago/metodopago.module').then( m => m.MetodopagoPageModule)
  },  {
    path: 'demolicion',
    loadChildren: () => import('./pages/categoria/demolicion/demolicion.module').then( m => m.DemolicionPageModule)
  },
  {
    path: 'carpinteria',
    loadChildren: () => import('./pages/categoria/carpinteria/carpinteria.module').then( m => m.CarpinteriaPageModule)
  },
  {
    path: 'pintura',
    loadChildren: () => import('./pages/categoria/pintura/pintura.module').then( m => m.PinturaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
