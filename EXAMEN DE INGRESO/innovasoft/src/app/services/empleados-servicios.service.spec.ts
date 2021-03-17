import { TestBed } from '@angular/core/testing';

import { EmpleadosServiciosService } from './empleados-servicios.service';

describe('EmpleadosServiciosService', () => {
  let service: EmpleadosServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
