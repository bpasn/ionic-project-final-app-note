import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploaderPage } from './uploader.page';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: UploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ShareModule
],
  exports: [RouterModule],
})
export class UploaderPageRoutingModule {}
