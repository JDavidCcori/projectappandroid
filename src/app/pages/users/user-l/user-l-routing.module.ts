import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLPage } from './user-l.page';

const routes: Routes = [
  {
    path: '',
    component: UserLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLPageRoutingModule {}
