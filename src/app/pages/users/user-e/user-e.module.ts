import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserEPageRoutingModule } from './user-e-routing.module';

import { UserEPage } from './user-e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserEPageRoutingModule
  ],
  declarations: [UserEPage]
})
export class UserEPageModule {}
