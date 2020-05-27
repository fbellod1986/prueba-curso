import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
                          { path: 'prueba', loadChildren: () => import('./views/tablas/tablas.module').then(m => m.TablasModule) },
                          { path: 'prueba', loadChildren: () => import('./views/tarjetas/tarjetas.module').then(m => m.TarjetasModule) },
                          { path: '', redirectTo: '/prueba/tablas', pathMatch: 'full'},
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
