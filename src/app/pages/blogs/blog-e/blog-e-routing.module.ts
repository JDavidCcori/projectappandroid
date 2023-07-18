import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogEPage } from './blog-e.page';

const routes: Routes = [
  {
    path: '',
    component: BlogEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogEPageRoutingModule {}
