import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogDPageRoutingModule } from './blog-d-routing.module';

import { BlogDPage } from './blog-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogDPageRoutingModule
  ],
  declarations: [BlogDPage]
})
export class BlogDPageModule {}
