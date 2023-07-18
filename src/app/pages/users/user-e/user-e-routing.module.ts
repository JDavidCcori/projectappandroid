import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEPage } from './user-e.page';

const routes: Routes = [
  {
    path: '',
    component: UserEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEPageRoutingModule {}
