import { Component, HostBinding, OnInit } from '@angular/core';
import { Empleados } from '../../models/empleados';
import { Router, ActivatedRoute } from '@angular/router';

import { EmpleadosServiciosService } from '../../services/empleados-servicios.service'


@Component({
  selector: 'app-ingresar-novedad',
  templateUrl: './ingresar-novedad.component.html',
  styleUrls: ['./ingresar-novedad.component.css']
})
export class IngresarNovedadComponent implements OnInit {
conversion: any;

  @HostBinding('class') classes = 'row';

  empleado: Empleados =
  {
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
     create_at:new Date(),
     correo: ''
    };

  constructor(private EmpleadosServiciosService: EmpleadosServiciosService, private router: Router, private activeRouter: ActivatedRoute) { }


  ngOnInit() {
  const params = this.activeRouter.snapshot.params;
  if(params.id) {
    this.EmpleadosServiciosService.getEmpleado(params.id)
    .subscribe(
      res => {
        this.conversion=res;
        this.empleado=this.conversion;
      }
    )
  }


  }

  updateEmpleado(){
    this.EmpleadosServiciosService.updateEmpleado(this.empleado.id, this.empleado)
    .subscribe(
      res=> {
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
