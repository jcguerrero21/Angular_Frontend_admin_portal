/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetListaLibrosService } from './get-lista-libros.service';

describe('GetListaLibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetListaLibrosService]
    });
  });

  it('should ...', inject([GetListaLibrosService], (service: GetListaLibrosService) => {
    expect(service).toBeTruthy();
  }));
});
