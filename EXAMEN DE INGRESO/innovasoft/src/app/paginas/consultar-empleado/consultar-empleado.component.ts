import { Component,EventEmitter,HostBinding, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmpleadosServiciosService } from '../../services/empleados-servicios.service';


@Component({
  selector: 'app-consultar-empleado',
  templateUrl: './consultar-empleado.component.html',
  styleUrls: ['./consultar-empleado.component.css']
})
export class ConsultarEmpleadoComponent implements OnInit {


conversion:any;
rta:[];


  constructor(
    private empleadosServiciosService: EmpleadosServiciosService) { }

  ngOnInit(): void {
    this.getEmpleados();

  }


  getEmpleados() {
    this.empleadosServiciosService.getEmpleados()
      .subscribe(
        data => {
        this.conversion=data;
        this.rta=this.conversion;
      });
}

  deleteEmpleado(id: string){
    this.empleadosServiciosService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.getEmpleados();
      },
      err => console.log(err)
    );
  }






}
