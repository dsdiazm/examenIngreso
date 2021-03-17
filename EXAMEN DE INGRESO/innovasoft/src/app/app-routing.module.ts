import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarNovedadComponent } from './paginas/ingresar-novedad/ingresar-novedad.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  {
      path: 'home',
      loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
      path: 'login',
      loadChildren: () =>
        import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
      path: 'register',
      loadChildren: () =>
        import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'ingresar-empleado',
    loadChildren: () =>
    import('./paginas/ingresar-empleado/ingresar-empleado.module').then(m => m.IngresarEmpleadoModule)
  },
  {
    path: 'consultar-empleado',
    loadChildren: () =>
    import('./paginas/consultar-empleado/consultar-empleado.module').then(m => m.ConsultarEmpleadoModule)
  },
  {
     path: 'ingresar-novedad',
     loadChildren: () =>
     import('./paginas/ingresar-novedad/ingresar-novedad.module').then(m => m.IngresarNovedadModule)
  },
  {
    path: 'empleados/edit/:id',
    component: IngresarNovedadComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
