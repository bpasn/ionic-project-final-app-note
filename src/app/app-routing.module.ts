import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "tabs", pathMatch: "full" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {path: "register",loadChildren: "./register/register.module#RegisterPageModule"},
  {path: "tabs",loadChildren: "./tabs/tabs.module#TabsPageModule"},
    // canActivate: [AuthService],
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { preloadingStrategy: PreloadAllModules 