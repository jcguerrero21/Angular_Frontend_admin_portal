/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditarLibroService } from './editar-libro.service';

describe('EditarLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarLibroService]
    });
  });

  it('should ...', inject([EditarLibroService], (service: EditarLibroService) => {
    expect(service).toBeTruthy();
  }));
});
