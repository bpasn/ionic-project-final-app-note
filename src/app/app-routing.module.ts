import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service'
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {path: "register",loadChildren: "./register/register.module#RegisterPageModule"},
  { path: "tabs", loadChildren: "./tabs/tabs.module#TabsPageModule", canActivate: [AuthService] },
  {
    path: 'add-note',
    loadChildren: () => import('./add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'view-note/:id',
    loadChildren: () => import('./view-note/view-note.module').then( m => m.ViewNotePageModule)
  },
  {
    path: 'update-note/:id',
    loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)
  },
  

 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// , { preloadingStrategy: PreloadAllModules 
// {
//   path: 'post',
//     loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)
// },