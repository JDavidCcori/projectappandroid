import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AlertService } from 'src/app/services/alert.service';
import { BlogI } from 'src/app/models/userI.model';
import { UserI } from 'src/app/models/userI.model';


@Component({
  selector: 'app-blog-c',
  templateUrl: './blog-c.page.html',
  styleUrls: ['./blog-c.page.scss'],
})
export class BlogCPage implements OnInit {
  public osForm!: FormGroup;
  public blogI = {
    title: '',
    description: '',
    image: '',
    mapa: '',
    uid: '',
    userId: '',
    date: new Date(),
  };

  userId = '';

  constructor(
    private auth: AuthService,
    private fireStore: FirestoreService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toast: ToastService,
    private alert: AlertService,
    private loadingCtrl: LoadingController,
  ) {}

  async ngOnInit() {
    this.auth.stateUser().subscribe((user) => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }
  crearB() {
    const path = 'Blogs';
    const id = this.fireStore.getId();
    this.blogI.uid = id;
    createdBy: this.userId,
    this.fireStore.createDoc(this.blogI, path, id, this.userId).then(() => {
      this.toast.presentToast('Guardado con éxito', 3000, 'top');
      this.router.navigate(['/home']);
    });
  }
}
