import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Empleados} from '../models/empleados'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiciosService {

API_URI = 'http://localhost:3000/api'

constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(`${this.API_URI}/empleados`);
  }

  getEmpleado(id: string) {
    return this.http.get(`${this.API_URI}/empleados/${id}`);
  }

  deleteEmpleado(id: string): Observable <any>{
    return this.http.delete(`${this.API_URI}/empleados/${id}`);
  }

  saveEmpleado(empleado: Empleados){
    return this.http.post(`${this.API_URI}/empleados`, empleado);
  }

  updateEmpleado(id: string|number, updatedEmpleados: Empleados){
    return this.http.put(`${this.API_URI}/empleados/${id}`, updatedEmpleados);
  }


}
