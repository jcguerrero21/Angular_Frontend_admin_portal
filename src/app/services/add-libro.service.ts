import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Libro } from '../models/libro';

@Injectable()
export class AddLibroService {

  constructor(private http: Http) { }

  enviarLibro(libro: Libro) {
    let url = "http://localhost:8181/libro/aniadir";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(libro), {headers: headers});
  }

}
