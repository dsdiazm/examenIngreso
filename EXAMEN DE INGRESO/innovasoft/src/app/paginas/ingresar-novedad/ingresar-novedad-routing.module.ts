import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarNovedadComponent } from './ingresar-novedad.component';

const routes: Routes = [{ path: '', component: IngresarNovedadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarNovedadRoutingModule { }
