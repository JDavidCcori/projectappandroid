import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  credentials = {
    correo: '',
    password: ''
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private menu: MenuController,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  onClick() {
    this.auth.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error))
  }

  loginF(){
    this.auth.loginWithFacebook().then(res => {
      console.log(res);
      this.router.navigate(['/home']);
    }).catch(error=> console.log(error))
  }
}
