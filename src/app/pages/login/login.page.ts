import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';


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
    private toast: ToastService
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
  async login() {
    console.log('credenciales -> ', this.credentials);
    const res = await this.auth.login(this.credentials.correo, this.credentials.password).catch( error => {
        console.log('error');
        this.toast.presentToast('Correo o contraseña invalidos', 2000, 'top');
    })
    if (res) {
        console.log('res -> ', res);
        this.toast.presentToast('Ingreso exitoso', 2000, 'top')
        this.router.navigate(['/home'])
    }
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
      this.router.navigate(['/home']);
    }).catch(error=> console.log(error))
  }
}
