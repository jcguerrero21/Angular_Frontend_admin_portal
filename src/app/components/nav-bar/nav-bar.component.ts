import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = true;

  constructor(private loginService: LoginService) { }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  cerrarSesion() {
    this.loginService.cerrarSesion().subscribe(
      res => {
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    $("#btnMenu").sideNav();

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