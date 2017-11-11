import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  enviarCredenciales(username: string, password: string) {
    let url = "http://localhost:8080/token";
    let codificarCredenciales = btoa(username+":"+password);
    let basicHeader = "Basic "+codificarCredenciales;
    let headers = new Headers ({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });

    return this.http.get(url, {headers: headers});
  }

}
