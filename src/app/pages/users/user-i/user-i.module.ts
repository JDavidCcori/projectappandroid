import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserIPageRoutingModule } from './user-i-routing.module';

import { UserIPage } from './user-i.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserIPageRoutingModule
  ],
  declarations: [UserIPage]
})
export class UserIPageModule {}
