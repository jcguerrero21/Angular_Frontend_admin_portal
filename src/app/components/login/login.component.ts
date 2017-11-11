import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private imagenCard: string;
  private credenciales = {'username':'', 'password':''};
  private loggedIn = false;

  constructor(private loginService: LoginService) { 
    this.imagenCard = '/assets/imagenes/logo.png';
  }

  onSubmit(){
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
  }

}
