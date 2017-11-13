/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetLibroService } from './get-libro.service';

describe('GetLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLibroService]
    });
  });

  it('should ...', inject([GetLibroService], (service: GetLibroService) => {
    expect(service).toBeTruthy();
  }));
});
