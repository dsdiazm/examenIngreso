import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarEmpleadoComponent } from './ingresar-empleado.component';

const routes: Routes = [{ path: '', component: IngresarEmpleadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresarEmpleadoRoutingModule { }

