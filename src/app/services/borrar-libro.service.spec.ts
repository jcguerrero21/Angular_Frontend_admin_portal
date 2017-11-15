/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BorrarLibroService } from './borrar-libro.service';

describe('BorrarLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorrarLibroService]
    });
  });

  it('should ...', inject([BorrarLibroService], (service: BorrarLibroService) => {
    expect(service).toBeTruthy();
  }));
});
