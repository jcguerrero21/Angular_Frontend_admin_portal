import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Libro } from '../../models/libro';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetLibroService } from '../../services/get-libro.service';
import { EditarLibroService } from '../../services/editar-libro.service';

declare var $: any;

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  private libroId: number;
  private libro: Libro = new Libro();
  private libroActualizado: boolean;

  constructor(
    private uploadImageService: UploadImageService,
    private editarLibroService: EditarLibroService,
    private getLibroService: GetLibroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    this.editarLibroService.enviarLibro(this.libro).subscribe(
      data => {
        this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
        this.libroActualizado=true;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {

    $('#categoria').material_select();
    $('#formato').material_select();
    $('#idioma').material_select();

    this.route.params.forEach((params: Params) => {
      this.libroId = Number.parseInt(params['id']);
    }); 

    this.getLibroService.getLibro(this.libroId).subscribe(
      res => {
          this.libro = res.json();
      },
      error => {
        console.log(error);
      }
    )
  }

}
