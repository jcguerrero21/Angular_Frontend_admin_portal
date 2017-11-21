import { Component, OnInit, HostBinding } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetListaLibrosService } from '../../services/get-lista-libros.service';
import { Libro } from '../../models/libro';
import { GetLibroService } from '../../services/get-libro.service';
import { slide } from '../../animations/animations';

@Component({
  selector: 'app-vista-libro',
  templateUrl: './vista-libro.component.html',
  styleUrls: ['./vista-libro.component.css'],
  animations: [slide]
})
export class VistaLibroComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private libro: Libro = new Libro();
  private libroId: number;
  private autorImg: string;
  private editorialImg: string;


  constructor(private getLibroService: GetLibroService, private route: ActivatedRoute, private router: Router) {
    this.autorImg = '/assets/imagenes/autor.jpg';
    this.editorialImg = '/assets/imagenes/editorial.jpg';
  }

  onSelect(libro: Libro) {
    this.router.navigate(['/editarLibro', this.libro.id])
    //.then(s => location.reload())
    ;
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      this.libroId = Number.parseInt(params['id']);
    });

    this.getLibroService.getLibro(this.libroId).subscribe(
      res => {
        this.libro = res.json()
      },
      error => {
        console.log(error);
      }
    );

  }

}
