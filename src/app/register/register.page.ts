import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import {AngularFirestore} from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
// import { UserService } from 'src/app/user.service';
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public afstore: AngularFirestore,
   
    public alert: AlertController,
    public router: Router,
     // public user: UserService,
  ) {}

  ngOnInit() {}

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      this.showtAlert("error!","password don't match")
      return console.error("Password don't match");
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username+"@codemamn.com",password);
      console.log(res)
      this.showtAlert("Success!", "Welcome board")
      this.router.navigate(['/tabs'])

    } catch (error) {
      console.dir(error)
      this.showtAlert("Error", error.message)
    }

  }


  async showtAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"],
    });

    await alert.present();
  }

}

