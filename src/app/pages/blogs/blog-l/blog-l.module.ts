import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogLPageRoutingModule } from './blog-l-routing.module';

import { BlogLPage } from './blog-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogLPageRoutingModule
  ],
  declarations: [BlogLPage]
})
export class BlogLPageModule {}
