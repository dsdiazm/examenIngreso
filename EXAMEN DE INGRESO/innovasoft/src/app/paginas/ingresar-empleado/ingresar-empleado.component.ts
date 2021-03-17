import { Component,HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleados } from '../../models/empleados';


import { EmpleadosServiciosService } from '../../services/empleados-servicios.service'

@Component({
  selector: 'app-ingresar-empleado',
  templateUrl: './ingresar-empleado.component.html',
  styleUrls: ['./ingresar-empleado.component.css']
})
export class IngresarEmpleadoComponent implements OnInit {


  @HostBinding('class') classes = 'row';

  empleado: Empleados = {
     id: 0,
     name:'',
     contractTypeName:'',
     roleId:'',
     roleDescripcion:'',
     hourlySalary:0,
     monthlySalary:0,
     numberDocument:'',
     fechaNacimiento: '',
     direccion:'',
     ciudad:'',
     estadoCivil:'',
     numberCelular:0,
     numeroFijo:0,
     fechaIngreso:'',
     tipoDocumento:'',
     barrio:'',
     iniTrabajo:'',
     finTrabajo:'',
     tipoBono:'',
     valorBono:'',
     estado:'',
     create_at:new Date,
     correo: ''
    };



  constructor(
    private EmpleadosServiciosService: EmpleadosServiciosService, private router: Router, private activeRouter: ActivatedRoute) {}


  ngOnInit() {

  }

  saveNewEmpleado(){
    delete this.empleado.create_at;
    delete this.empleado.id;

    this.EmpleadosServiciosService.saveEmpleado(this.empleado)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/consultar-empleado'])

      },
      err => console.error(err)
    );
  }



}
