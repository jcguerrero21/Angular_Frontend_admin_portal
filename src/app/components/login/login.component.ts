import { Component, OnInit, HostBinding } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { slide } from '../../animations/animations';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [slide]
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  private imagenCard: string;
  private credenciales = { 'username': '', 'password': '' };
  private loggedIn = false;

  constructor(private loginService: LoginService) {
    this.imagenCard = '/assets/imagenes/logo.png';
  }

  onSubmit() {
    this.loginService.enviarCredenciales(this.credenciales.username, this.credenciales.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        this.loggedIn = true;
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loginService.verificarSesion().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );

  }
}
