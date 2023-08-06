import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { BlogI } from '../models/userI.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  blogs: BlogI[] = [];
  private path = 'Blogs/';

  constructor(
    public popoverController: PopoverController,
    private firestore: FirestoreService,
  ) {
    
  }

  ngOnInit() {
    this.loadProductos();
  }
  loadProductos() {
    this.firestore
      .getCollection<BlogI>(this.path)
      .subscribe((res) => {
        // console.log(res);
        this.blogs = res;
      });
  }

  async detalle(){

  }

  like(){
    
  }
}
