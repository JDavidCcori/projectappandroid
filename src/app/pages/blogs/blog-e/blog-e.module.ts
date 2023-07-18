import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogEPageRoutingModule } from './blog-e-routing.module';

import { BlogEPage } from './blog-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogEPageRoutingModule
  ],
  declarations: [BlogEPage]
})
export class BlogEPageModule {}
