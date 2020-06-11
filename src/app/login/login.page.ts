import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
 import { auth } from 'firebase/app'
 import { AlertController } from "@ionic/angular";
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
    public alertController: AlertController,
    public user: UserService,
    public router: Router,

  ) {}

  ngOnInit() {}



  async SuccessOrError(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['ตกลง']
      
    })

    await alert.present()
  }



  async login() {
    const { username, password } = this

    if (username == null || password == null) {
      // this.SuccessOrError('เกิดข้อผิดพลาด', 'ไม่พบบัญชีผู้ใช้')
      return console.error("กรุณาสมัคสมาชิก")
    }
    try {
      // kind of a hack.
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + "@note.com",password)


      if(res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        })
        this.SuccessOrError('เข้าสู่ระบบสำเร็จ', 'ยินดีต้อนรับ')
        this.router.navigate(['/tabs/feed'])
        
      }


    } catch (err) {
      console.dir(err);
      if (err.code === "auth/user-not-found") {
        
        this.SuccessOrError('เกิดข้อผิดพลาด', 'ไม่พบบัญชีผู้ใช้')

      }

      if (err.code === "auth/wrong-password") {

        this.SuccessOrError('เกิดข้อผิดพลาด', 'รหัสผ่านไม่ถูกต้อง')

      }

      switch (err.message) {
        case "The email address is badly formatted.":
          this.SuccessOrError('เกิดข้อผิดพลาด', 'กรุณากรอกข้อมูล')
          console.dir(err)
          break;

      


}



 }

 
  



 
}

 Register() {
    this.router.navigate(['/register'])
  }




}