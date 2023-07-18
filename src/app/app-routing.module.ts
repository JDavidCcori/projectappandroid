import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user-e',
    loadChildren: () => import('./pages/users/user-e/user-e.module').then( m => m.UserEPageModule)
  },
  {
    path: 'user-l',
    loadChildren: () => import('./pages/users/user-l/user-l.module').then( m => m.UserLPageModule)
  },
  {
    path: 'blog-e',
    loadChildren: () => import('./pages/blogs/blog-e/blog-e.module').then( m => m.BlogEPageModule)
  },
  {
    path: 'blog-l',
    loadChildren: () => import('./pages/blogs/blog-l/blog-l.module').then( m => m.BlogLPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'createuser',
    loadChildren: () => import('./pages/createuser/createuser.module').then( m => m.CreateuserPageModule)
  },
  {
    path: 'blog-c',
    loadChildren: () => import('./pages/blogs/blog-c/blog-c.module').then( m => m.BlogCPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
