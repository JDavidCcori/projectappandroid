import { Component, OnInit } from '@angular/core';
import { BlogI } from 'src/app/models/userI.model';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastService } from 'src/app/services/toast.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-blog-e',
  templateUrl: './blog-e.page.html',
  styleUrls: ['./blog-e.page.scss'],
})
export class BlogEPage implements OnInit {

  uid: string = '';
  blogs: BlogI | null = null;

  constructor(
    private auth: AuthService,
    private firestore: FirestoreService,
    private toast: ToastService,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.auth.stateUser().subscribe((res) => {
      this.getUid();
    });
    this.getUid();
  }
  async getUid() {
    const uid = await this.auth.getUid();
    if (uid) {
      this.uid = uid;
      this.getInfoUser();
    } else {
    }
  }
  getInfoUser() {
    const path = 'Blogs';
    const id = this.uid;
    this.firestore.getDoc<BlogI>(path, id).subscribe( res => {
        if (res) {
          this.blogs = res;
        }
        
    })

  }

  async editAtributo(name: string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Editar ' + name,
      inputs: [
        {
          name,
          type: 'text',
          placeholder: 'Ingresa tu ' + name
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (ev) => {
            console.log('Confirm Ok -> ', ev);
            this.saveAtributo(name, ev[name])
          }
        }
      ]
    });
    await alert.present();
  }

  async saveAtributo(name: string, input: any) {
    const path = 'Blogs';
    const id = this.uid;
    const updateDoc: any = {
    };
    updateDoc[name] = input;
    this.firestore.updateDoc(path, id, updateDoc).then( () => {
    this.toast.presentToast('Actualizado con exito', 3000, 'top')
    })
  }
}
