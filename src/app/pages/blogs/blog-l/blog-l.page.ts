import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { BlogI } from 'src/app/models/userI.model';
import { ToastService } from 'src/app/services/toast.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-blog-l',
  templateUrl: './blog-l.page.html',
  styleUrls: ['./blog-l.page.scss'],
})
export class BlogLPage implements OnInit {
  blogs: BlogI[] = [];
  userId = '';
 

  constructor(
    private firestore: FirestoreService,
  ) {
  }


  ngOnInit() {
    this.getResultados();
  }

  getResultados() {
    const path = 'Blogs';
    this.firestore.getCollection<BlogI>(path).subscribe((res) => {
      this.blogs = res;
    });
  }

  
}
