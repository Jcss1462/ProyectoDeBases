import { TestBed } from '@angular/core/testing';

import { CancionesartistasService } from './cancionesartistas.service';

describe('CancionesartistasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancionesartistasService = TestBed.get(CancionesartistasService);
    expect(service).toBeTruthy();
  });
});
