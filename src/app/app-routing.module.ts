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
  },
  {
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
  {
    path: 'detalle-producto',
    loadChildren: () => import('./pages/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'admhome',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'gestion-productos',
    loadChildren: () => import('./admin/gestion-productos/gestion-productos.module').then( m => m.GestionProductosPageModule)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./admin/gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
