import { Component, OnInit, EventEmitter } from '@angular/core';
import { Libro } from '../../models/libro';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { GetListaLibrosService } from '../../services/get-lista-libros.service';
import { BorrarLibroService } from '../../services/borrar-libro.service';
import { MaterializeAction } from 'angular2-materialize';

declare var $: any;

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  private libroSeleccionado: Libro;
  private checked: boolean;
  private listaLibros: Libro[];
  private allChecked: boolean;
  private borrarListaLibros: Libro[] = new Array();
  modalActions = new EventEmitter<string | MaterializeAction>();

  constructor(private getListaLibrosService: GetListaLibrosService, private router: Router,
     private borrarLibroService: BorrarLibroService) { }

  onSelect(libro: Libro) {
    this.libroSeleccionado = libro;
    this.router.navigate(['/vistaLibro', this.libroSeleccionado.id]);
  }

  openModal(libro: Libro) {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }

  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  borrarSelecionado(libro: Libro) {
    this.borrarLibroService.enviarLibro(libro.id).subscribe(
      res => {
        console.log(res);
        this.closeModal();
      },
      err => console.log(err),
      () => {
        this.listaLibros = this.listaLibros.filter(h => h !== libro)
      }
    )
  }

  ngOnInit() {

    this.getListaLibrosService.getListaLibros().subscribe(
      res => {
        console.log(res.json());
        this.listaLibros = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

}
