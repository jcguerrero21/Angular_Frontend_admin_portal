import { Component, OnInit, HostBinding } from '@angular/core';
import { Factura } from '../../models/factura';
import { FacturaService } from '../../services/factura.service';
import { Router } from '@angular/router';
import { slide } from '../../animations/animations';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css'],
  animations: [slide]
})
export class ListaFacturasComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private listaFacturas: Factura[];

  constructor(private getFacturaService: FacturaService, router: Router) { }

  getListaFacturas() {
    this.getFacturaService.getListaFacturas().subscribe(
      res => {
        console.log(res.json());
        this.listaFacturas = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

  enviarSelecionado(factura: Factura) {
    this.getFacturaService.enviarPedido(factura).subscribe(
      res => {
        console.log(res);
        this.getListaFacturas();
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getListaFacturas();
  }

}
