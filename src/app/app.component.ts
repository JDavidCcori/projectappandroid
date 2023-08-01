import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from './services/toast.service';
import { UserI } from './models/userI.model';
import { PopoverController } from '@ionic/angular';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  login: boolean = false;
  rol: 'cliente' | 'admin' = 'admin';

  public selectedIndex: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService,
    private popoverControler: PopoverController,
    private firestore: FirestoreService
  ) {
    this.auth.stateUser().subscribe((res) => {
      if (res) {
        this.login = true;
        this.getDatosUser(res.uid);
      } else {
        this.login = false;
        //  this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit(): void {}

  onClick() {
    this.auth.logout();
    this.toastService.presentToast('Sesion Finalizada', 2000, 'top');
    this.router.navigate(['/home']);
  }

  loginApp() {
    this.login = true;
  }

  getDatosUser(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getDoc<UserI>(path, id).subscribe( res => {
        if (res) {
          this.rol = res.perfil
        }
    })
  }
}
