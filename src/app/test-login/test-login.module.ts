import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestLoginPageRoutingModule } from './test-login-routing.module';

import { TestLoginPage } from './test-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestLoginPageRoutingModule
  ],
  declarations: [TestLoginPage]
})
export class TestLoginPageModule {}
