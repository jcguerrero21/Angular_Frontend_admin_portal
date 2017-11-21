import { Component, OnInit, HostBinding } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Libro } from '../../models/libro';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetLibroService } from '../../services/get-libro.service';
import { EditarLibroService } from '../../services/editar-libro.service';
import { slide } from '../../animations/animations';

declare var $: any;

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css'],
  animations: [slide]
})
export class EditarLibroComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

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
        this.libroActualizado = true;
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


  // Aqui tenemos un ejemplo por si quisieramos validar el formulario con jquery
  // functionHover() {
  //   $("#formValidate").validate({
  //     rules: {
  //       uname: {
  //         required: true,
  //         minlength: 5
  //       },
  //       cemail: {
  //         required: true,
  //         email: true
  //       },
  //       password: {
  //         required: true,
  //         minlength: 5
  //       },
  //       cpassword: {
  //         required: true,
  //         minlength: 5,
  //         equalTo: "#password"
  //       },
  //       curl: {
  //         required: true,
  //         url: true
  //       },
  //       crole: "required",
  //       ccomment: {
  //         required: true,
  //         minlength: 15
  //       },
  //       cgender: "required",
  //       cagree: "required",
  //     },
  //     //For custom messages
  //     messages: {
  //       uname: {
  //         required: "Enter a username",
  //         minlength: "Enter at least 5 characters"
  //       },
  //       curl: "Enter your website",
  //     },
  //     errorElement: 'div',
  //     errorPlacement: function (error, element) {
  //       var placement = $(element).data('error');
  //       if (placement) {
  //         $(placement).append(error)
  //       } else {
  //         error.insertAfter(element);
  //       }
  //     }
  //   });
  // }

}
