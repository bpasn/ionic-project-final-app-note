import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from "@angular/http";

import firebaseConfig from "./firebase"
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"
// import { AngularFireAuth } from '@angularfire2/auth';
import { AngularFirestoreModule,  AngularFirestore, SETTINGS } from '@angular/fire/firestore';
 import { UserService } from "./user.service";
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { LoadingComponent } from './loading/loading.component';
import { ShareModule } from './share.module';

// import * as firebase from 'firebase';

// firebase.initializeApp(environment.firebase);
// const routes: Routes = [
//   {
//     path: "",
//     redirectTo: "login",
//     pathMatch: "full",
//   },
//   {
//     path: "login",
//     loadChildren: "./pages/login/login.module#LoginPageModule",
//   },
//   {
//     path: "register",
//     loadChildren: "./pages/register/register.module#RegisterPageModule",
//   },
// ];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    ShareModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     UserService,AuthService,
    { provide: SETTINGS, useValue: {} },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
