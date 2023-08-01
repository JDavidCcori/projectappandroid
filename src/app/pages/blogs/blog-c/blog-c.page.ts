import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AlertService } from 'src/app/services/alert.service';
import { BlogI } from 'src/app/models/userI.model';


@Component({
  selector: 'app-blog-c',
  templateUrl: './blog-c.page.html',
  styleUrls: ['./blog-c.page.scss'],
})
export class BlogCPage implements OnInit {
  private authService!: AuthService;
  public osForm!: FormGroup;
  public blogI = {
    title: '',
    description: '',
    image: '',
    mapa: '',
    uid: '',
    date: new Date(),
  }

  constructor(
    private fireStore: FirestoreService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toast: ToastService,
    private alert: AlertService,
    private loadingCtrl: LoadingController,
  ) { }

  

  async ngOnInit() {
    
  }
  crearB() {

    const path = 'Blogs';
    const id = this.fireStore.getId();
    this.blogI.uid = id;
    this.fireStore.createDoc(this.blogI, path, id).then( () => {
        this.toast.presentToast('Guardado con éxito', 3000, 'top')
        this.router.navigate(['/home']);
    } )
}
}
