import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import {AngularFirestore} from "@angular/fire/firestore";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { UserService } from '../user.service';
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
    public alertController: AlertController,
    public router: Router,
     public user: UserService,
  ) {}

  ngOnInit() {}

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK'],
    });

    await alert.present()
  }

  async showtAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK'],
    });

    await alert.present()
  }


  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword) {
      //ยังไใ่ใช้ Alert ตัวนี้
       this.showtAlert("เกิดข้อผิกพลาด!","รหัสผ่านไม่ตรงกัน!")
      return console.error("Password don't match");
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username +"@codedamn.com",password);
      console.log(res)

      this.afstore.doc(`users/${res.user.uid}`).set({
        username

      })

      this.user.setUser({
        username,
        uid: res.user.uid

      })

      this.presentAlert('สำเร็จ', 'เข้าสู่ระบบเรียบร้อย')
      this.router.navigate(['/tabs'])

      // ยังไม่ได้ใช้ Alert
      // this.showtAlert("Success!", "Welcome board")
      // this.router.navigate(['/tabs'])

    } catch (error) {
      console.dir(error);
      if (error.code === "auth/weak-password")
        this.presentAlert('เกิดข้อผิดพลาด', 'รหัสผ่าน "6" ตัวขึ้นไป ')

    }

       // ยังไม่ได้ใช้ Alert
      // this.showtAlert("Error", error.message)
    }

  }

// ยังไม่ได้ใช้ Alert ตัวนี้




