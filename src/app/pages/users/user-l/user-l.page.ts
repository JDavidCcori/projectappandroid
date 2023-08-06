import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserI } from 'src/app/models/userI.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastService } from 'src/app/services/toast.service';
import { AlertService } from 'src/app/services/alert.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-user-l',
  templateUrl: './user-l.page.html',
  styleUrls: ['./user-l.page.scss'],
})
export class UserLPage implements OnInit {

  users: UserI[]= [];

  private path = 'Usuarios';
  constructor(
    private firestore: FirestoreService,
    private clienteS: ClientesService,
  ) { }

  ngOnInit() {
    this.getResultados();
    
  }

  getResultados() {
    const path = 'Usuarios';
    this.firestore.getCollection<UserI>(path).subscribe((res) => {
      this.users = res;
    });
  }  

  // delete(usuario: UserI) {
  //   this.clienteS.removeById(usuario.uid);
  // }

}
