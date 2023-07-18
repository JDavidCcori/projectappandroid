import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    correo: '',
    password: ''
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private menu: MenuController,
  ) { }

  ngOnInit() {
  }

  async login() {
    const res = await this.auth.login(this.credentials.correo, this.credentials.password).catch( error => {
        console.log('error');
    })
    if (res) {
        this.router.navigate(['/home'])
    }
  }
}
