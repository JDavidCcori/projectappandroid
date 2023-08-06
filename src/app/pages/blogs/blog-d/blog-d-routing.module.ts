import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogDPage } from './blog-d.page';

const routes: Routes = [
  {
    path: '',
    component: BlogDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogDPageRoutingModule {}
