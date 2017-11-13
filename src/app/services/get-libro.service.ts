import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Injectable()
export class GetLibroService {

  constructor(private http: Http) { }

  getLibro(id:number) {
    let url = "http://localhost:8181/libro/"+id;
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, {headers: headers});
  }
}
