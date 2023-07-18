import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogCPageRoutingModule } from './blog-c-routing.module';

import { BlogCPage } from './blog-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogCPageRoutingModule
  ],
  declarations: [BlogCPage]
})
export class BlogCPageModule {}
