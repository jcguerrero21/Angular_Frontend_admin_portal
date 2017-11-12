import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Routing } from './app.routing';

import { LoginService } from './services/login.service';
import { AddLibroService } from './services/add-libro.service';
import { UploadImageService } from './services/upload-image.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNuevoLibroComponent } from './components/add-nuevo-libro/add-nuevo-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNuevoLibroComponent
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
    UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
