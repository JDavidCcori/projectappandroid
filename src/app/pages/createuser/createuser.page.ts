import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/userI.model';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {
  formReg: FormGroup;
  datos: UserI = {
    nombre: '',
    apellidos: '',
    correo: '',
    uid: '',
    password: '',
    birth: new Date(),
    perfil: 'cliente',
  };
  constructor(
    private auth: AuthService,
    private firestore: FirestoreService,
    private router: Router,
    private toast: ToastService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  async registrar() {
    const res = await this.auth.register(this.datos).catch((error) => {});
    if (res) {
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      await this.firestore.createDoc(this.datos, path, id);
      this.toast.presentToast('Registrado con exito', 3000, 'top');
      this.router.navigate(['/login']);
    }
  }
}
