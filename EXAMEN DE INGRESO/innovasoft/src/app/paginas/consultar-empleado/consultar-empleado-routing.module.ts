import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarEmpleadoComponent } from "./consultar-empleado.component";


const routes: Routes = [{ path: '', component: ConsultarEmpleadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarEmpleadoRoutingModule { }
