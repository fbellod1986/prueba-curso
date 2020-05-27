import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetasComponent } from './tarjetas.component';

const routes: Routes = [{ path: 'targetas', component: TarjetasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetasRoutingModule { }
