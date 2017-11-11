import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  enviarCredenciales(username: string, password: string) {
    let url = "http://localhost:8181/token";
    let codificarCredenciales = btoa(username + ":" + password);
    let basicHeader = "Basic " + codificarCredenciales;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': basicHeader
    });

    return this.http.get(url, { headers: headers });
  }

  verificarSesion() {
    let url = "http://localhost:8181/verificarSesion";
  
    let headers = new Headers({
     'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  cerrarSesion() {
    let url = "http://localhost:8181/usuario/cerrarSesion";
    
      let headers = new Headers({
       'x-auth-token' : localStorage.getItem('xAuthToken')
      });
  
      return this.http.post(url, '', {headers: headers});
  }

}
