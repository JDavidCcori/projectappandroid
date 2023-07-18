import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLPage } from './blog-l.page';

const routes: Routes = [
  {
    path: '',
    component: BlogLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogLPageRoutingModule {}
