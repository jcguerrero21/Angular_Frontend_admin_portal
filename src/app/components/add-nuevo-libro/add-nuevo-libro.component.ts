import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';

declare var $: any;

@Component({
  selector: 'app-add-nuevo-libro',
  templateUrl: './add-nuevo-libro.component.html',
  styleUrls: ['./add-nuevo-libro.component.css']
})
export class AddNuevoLibroComponent implements OnInit {

  private nuevoLibro: Libro = new Libro();
  private libroAniadido: boolean;

  constructor() { 
  }

  ngOnInit() {

    $(document).ready(function () {
      $('#categoria').material_select();
      $('#formato').material_select();
      $('#idioma').material_select();
    });

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
      today: 'Hoy',
      clear: 'Borrar',
      close: 'OK',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

}
