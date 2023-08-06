import { Component, Inject, OnInit } from '@angular/core';
import { BlogI } from 'src/app/models/userI.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blog-d',
  templateUrl: './blog-d.page.html',
  styleUrls: ['./blog-d.page.scss'],
})
export class BlogDPage implements OnInit {
  uid: string = '';
  info: BlogI | null = null;

  constructor(
    private firestore: FirestoreService, 
    private auth: AuthService
  ) {}

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
          this.info = res;
        }
        
    })

  }
}
