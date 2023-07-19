import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIPage } from './user-i.page';

const routes: Routes = [
  {
    path: '',
    component: UserIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserIPageRoutingModule {}
