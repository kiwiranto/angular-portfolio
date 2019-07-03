import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { NotFoundComponent } from './modules/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(mod => mod.ProfileModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
