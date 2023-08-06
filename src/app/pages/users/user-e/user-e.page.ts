import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionSheetController, LoadingController, MenuController, Platform } from '@ionic/angular';
import { FotosService } from 'src/app/services/fotos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserI } from 'src/app/models/userI.model';

@Component({
  selector: 'app-user-e',
  templateUrl: './user-e.page.html',
  styleUrls: ['./user-e.page.scss'],
})
export class UserEPage implements OnInit {
  productos: UserI[] = [];

  newProducto: UserI | null = null;

  enableNewProducto = false;

  private path = 'Productos/';


  newImage = '';
  newFile: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private action: ActionSheetController,
    private loading: LoadingController,
    private platform: Platform,
    private fotos: FotosService,
    private router: Router,
    private alert: AlertService,
    private cliente: ClientesService,
    private toast: ToastService,
  ) { }

  ngOnInit() {
  }

//   async newImageUpload(event: any) {
//     if (event.target.files && event.target.files[0]) {
//         this.newImage = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = ((image) => {
//             this.newProducto.foto = image.target?.result as string;
//         });
//         reader.readAsDataURL(event.target.files[0]);
//       }
// }
}
