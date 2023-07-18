import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    public popoverController: PopoverController,
  ) {}

  ngOnInit(): void {
      
  }
  async openMenu(ev: any) {  
    const menu = await this.popoverController.create({
      component: MenuComponent,
      translucent: true,
      event: ev,
    });
    await menu.present();
  }
}
