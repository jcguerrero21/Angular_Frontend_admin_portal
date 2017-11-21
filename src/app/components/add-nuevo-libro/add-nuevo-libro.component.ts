import { Component, OnInit, EventEmitter, HostBinding } from '@angular/core';
import { Libro } from '../../models/libro';
import { AddLibroService } from '../../services/add-libro.service';
import { UploadImageService } from '../../services/upload-image.service';
import { slide } from '../../animations/animations';

declare var $: any;

@Component({
  selector: 'app-add-nuevo-libro',
  templateUrl: './add-nuevo-libro.component.html',
  styleUrls: ['./add-nuevo-libro.component.css'],
  animations: [slide]
})
export class AddNuevoLibroComponent implements OnInit {
  
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private nuevoLibro: Libro = new Libro();
  private libroAniadido: boolean;
  model: string;
  modelChange = new EventEmitter();
  private birthdateOption: Date;

  constructor(private addLibroService: AddLibroService, private uploadImageService: UploadImageService) {
  }

  onSubmit() {
    this.addLibroService.enviarLibro(this.nuevoLibro).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.libroAniadido = true;
        this.nuevoLibro = new Libro();
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {

    //variables de inicialización que se cargaran cuando abramos el formulario de añadir libro
    this.libroAniadido = false;
    this.nuevoLibro.activo = true;

    $('#categoria').material_select();
    $('#formato').material_select();
    $('#idioma').material_select();

    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      weekdaysLetter: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      today: 'Hoy',
      clear: 'Borrar',
      close: 'OK',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });
  }
}
