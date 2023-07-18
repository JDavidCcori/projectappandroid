import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-blog-c',
  templateUrl: './blog-c.page.html',
  styleUrls: ['./blog-c.page.scss'],
})
export class BlogCPage implements OnInit {
  private authService!: AuthService;
  public osForm!: FormGroup;
  public users: void | User[]=[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private alertService: AlertService,
    private loadingCtrl: LoadingController,
  ) { }

  

  async ngOnInit() {
    
  }
}
