import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserLPageRoutingModule } from './user-l-routing.module';

import { UserLPage } from './user-l.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserLPageRoutingModule
  ],
  declarations: [UserLPage]
})
export class UserLPageModule {}
