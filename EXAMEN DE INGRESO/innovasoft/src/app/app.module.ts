import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { IngresarEmpleadoComponent } from './paginas/ingresar-empleado/ingresar-empleado.component';
import { IngresarNovedadComponent } from './paginas/ingresar-novedad/ingresar-novedad.component';


import {EmpleadosServiciosService} from './services/empleados-servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresarEmpleadoComponent,
    IngresarNovedadComponent



  ],
  imports: [BrowserModule,
     AppRoutingModule,
     ReactiveFormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     HttpClientModule,
     FormsModule,

    ],
  providers: [
    EmpleadosServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
