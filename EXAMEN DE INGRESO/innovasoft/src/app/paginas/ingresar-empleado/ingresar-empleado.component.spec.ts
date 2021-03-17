import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarEmpleadoComponent } from './ingresar-empleado.component';

describe('IngresarEmpleadoComponent', () => {
  let component: IngresarEmpleadoComponent;
  let fixture: ComponentFixture<IngresarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
