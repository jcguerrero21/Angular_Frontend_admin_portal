import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Libro } from '../models/libro';

@Injectable()
export class BorrarLibroService {

  constructor(private http: Http) { }

  enviarLibro(libroId: number) {
    let url = "http://localhost:8181/libro/borrar";

    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, libroId, { headers: headers });
  }

}
