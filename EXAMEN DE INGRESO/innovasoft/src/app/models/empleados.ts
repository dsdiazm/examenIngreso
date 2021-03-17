import { Observable } from "rxjs";

export interface Empleados {
id: number;
name: string;
contractTypeName: string;
roleId: string;
roleDescripcion: string;
hourlySalary: number;
monthlySalary: number;
numberDocument: string;
fechaNacimiento: string;
direccion: string;
ciudad: string;
estadoCivil: string;
numberCelular: number;
numeroFijo: number;
fechaIngreso: string;
tipoDocumento: string;
barrio: string;
iniTrabajo:string,
finTrabajo:string,
tipoBono:string,
valorBono:string,
estado: string;
create_at: Date;
correo: string;
}
