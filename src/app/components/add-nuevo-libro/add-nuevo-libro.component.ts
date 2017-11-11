import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-add-nuevo-libro',
  templateUrl: './add-nuevo-libro.component.html',
  styleUrls: ['./add-nuevo-libro.component.css']
})
export class AddNuevoLibroComponent implements OnInit {

  private nuevoLibro: Libro = new Libro();
  private libroAñadido: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
