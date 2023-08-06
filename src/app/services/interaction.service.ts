import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loading: any;

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alert: AlertController,
  ) { }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    await this.loading.present();


  }

  async closeLoading() {

    await this.loading.dismiss();
  }


  presentAlert( texto: string, subtitulo: string){
    let aceptar = false;
    new Promise( async (resolve, reject)=> {
      const alert = await this.alert.create({ 
        cssClass: 'my-custom-class',
        header: texto,
        subHeader: subtitulo,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Okay',
            handler: ()=> {
              aceptar = true;
            },
          }
        ]
  
      });
      
      await alert.present();
      await alert.onDidDismiss();
      return aceptar;
    })
  }

}