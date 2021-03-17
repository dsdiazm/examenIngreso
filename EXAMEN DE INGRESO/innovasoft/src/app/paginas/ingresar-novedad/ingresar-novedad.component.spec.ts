import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarNovedadComponent } from './ingresar-novedad.component';

describe('IngresarNovedadComponent', () => {
  let component: IngresarNovedadComponent;
  let fixture: ComponentFixture<IngresarNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarNovedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
