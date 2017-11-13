import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { GetListaLibrosService } from '../../services/get-lista-libros.service';

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

  constructor(private getListaLibrosService:GetListaLibrosService, private router:Router) { }

  onSelect(libro:Libro){
    this.libroSeleccionado = libro;
    this.router.navigate(['/vistaLibro', this.libroSeleccionado.id]);
  }

  ngOnInit() {

    this.getListaLibrosService.getListaLibros().subscribe(
      res => {
        console.log(res.json());
        this.listaLibros=res.json();
      },
      error => {
        console.log(error);
      }
    );

  }

}
