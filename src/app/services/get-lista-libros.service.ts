import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GetListaLibrosService {

  constructor(private http:Http) { }

  getListaLibros() {
    let url = "http://localhost:8181/libro/listaLibros";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

}
