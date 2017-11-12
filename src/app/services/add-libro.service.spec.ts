/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddLibroService } from './add-libro.service';

describe('AddLibroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddLibroService]
    });
  });

  it('should ...', inject([AddLibroService], (service: AddLibroService) => {
    expect(service).toBeTruthy();
  }));
});
