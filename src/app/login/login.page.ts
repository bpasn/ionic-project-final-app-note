import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
 import { auth } from 'firebase/app'
 import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
  // providers: [AngularFireAuth],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  async login() {
    const { username, password } = this
    
    try {
      // kind of a hack.
      const res = await this.afAuth.auth.signInWithEmailAndPassword(
        username + "@codedamn.com",
        password
      );
    } catch (err) {
      console.dir(err);
      if (err.code === "auth/operation-not-allowed") {
        console.log("yser don't found");
      }
    }
  }


}
