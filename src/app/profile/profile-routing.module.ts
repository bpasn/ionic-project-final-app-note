import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ShareModule } from '../share.module';


const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ShareModule
    
  ],
  
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
