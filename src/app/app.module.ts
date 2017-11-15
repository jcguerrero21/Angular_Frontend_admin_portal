import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Routing } from './app.routing';

import { LoginService } from './services/login.service';
import { AddLibroService } from './services/add-libro.service';
import { UploadImageService } from './services/upload-image.service';
import { GetListaLibrosService } from './services/get-lista-libros.service';
import { GetLibroService } from './services/get-libro.service';
import { EditarLibroService } from './services/editar-libro.service';
import { BorrarLibroService } from './services/borrar-libro.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNuevoLibroComponent } from './components/add-nuevo-libro/add-nuevo-libro.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { VistaLibroComponent } from './components/vista-libro/vista-libro.component';
import { EditarLibroComponent } from './components/editar-libro/editar-libro.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNuevoLibroComponent,
    ListaLibrosComponent,
    VistaLibroComponent,
    EditarLibroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    MaterializeModule
  ],
  providers: [
    LoginService,
    AddLibroService,
    UploadImageService,
    GetListaLibrosService,
    GetLibroService,
    EditarLibroService,
    BorrarLibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
