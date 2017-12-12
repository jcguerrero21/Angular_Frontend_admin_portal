import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Factura } from '../models/factura';

@Injectable()
export class FacturaService {

  constructor(private http: Http) { }

  getListaFacturas() {
    let url = "http://localhost:8181/factura/getAllFacturas";

    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: headers });
  }

  enviarPedido(factura: Factura) {
    let url = "http://localhost:8181/factura/enviarPedido";

    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(factura), { headers: headers });
  }
}
