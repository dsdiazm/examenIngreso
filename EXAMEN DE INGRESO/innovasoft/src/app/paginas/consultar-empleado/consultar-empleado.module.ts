import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultarEmpleadoRoutingModule } from './consultar-empleado-routing.module';
import { ConsultarEmpleadoComponent } from "./consultar-empleado.component";


@NgModule({
  declarations: [ConsultarEmpleadoComponent],
  imports: [
    CommonModule,
    ConsultarEmpleadoRoutingModule
  ]
})
export class ConsultarEmpleadoModule { }
