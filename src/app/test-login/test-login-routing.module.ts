import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestLoginPage } from './test-login.page';

const routes: Routes = [
  {
    path: '',
    component: TestLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestLoginPageRoutingModule {}
