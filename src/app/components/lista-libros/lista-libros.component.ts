import { Component, OnInit, EventEmitter, HostBinding } from '@angular/core';
import { Libro } from '../../models/libro';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { GetListaLibrosService } from '../../services/get-lista-libros.service';
import { BorrarLibroService } from '../../services/borrar-libro.service';
import { MaterializeAction } from 'angular2-materialize';
import { slide } from '../../animations/animations';

declare var $: any;

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  animations: [slide]
})
export class ListaLibrosComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private libroSeleccionado: Libro;
  private checked: boolean;
  private listaLibros: Libro[];
  private numeroLibros: number;
  private allChecked: boolean;
  private borrarListaLibros: Libro[] = new Array();
  modalActions = new EventEmitter<string | MaterializeAction>();
  modalActions2 = new EventEmitter<string | MaterializeAction>();

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

  openModal2() {
    this.modalActions2.emit({action:"modal",params:['open']});
  }
  closeModal2() {
    this.modalActions2.emit({action:"modal",params:['close']});
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
    );
  }

  actualizarBorrarListaLibros(checked: boolean, libro: Libro) {
    if (checked) {
      this.borrarListaLibros.push(libro);
    } else {
      this.borrarListaLibros.splice(this.borrarListaLibros.indexOf(libro), 1);
    }
  }

  actualizarSeleccionado(checked, boolean) {
    if (checked) {
      this.allChecked = true;
      this.borrarListaLibros = this.listaLibros.slice();
    } else {
      this.allChecked = false;
      this.borrarListaLibros = [];
    }
  }

  borrarLibrosSeleccionados() {
    for (let libro of this.borrarListaLibros) {
      this.borrarLibroService.enviarLibro(libro.id).subscribe(
        res => {
          console.log(res);
          this.listarLibros();
          this.closeModal2();
        },
        err => console.log(err)
      );
    }
  }

  listarLibros() {

    this.getListaLibrosService.getListaLibros().subscribe(
      res => {
        console.log(res.json());
        this.listaLibros = res.json();
        this.numeroLibros = this.listaLibros.length;
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
    this.listarLibros();
  }

}
