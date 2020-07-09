import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Note } from '../model/Note';
import { FirebaseService } from '../service/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { firestore } from 'firebase';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  note: Note = {
    title: '',
    content: '',
    createdAt: new Date().getTime()  //วัน/เดือน/ปี -- วัน/เวลา
  };
  busy: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
  ) { }

  ngOnInit() {
  }

  // Add Note
  addNote() {
    this.fbService.addNote(this.note).then(() => {
      this.router.navigateByUrl('/tabs/feed');
    }, err => {
    });
  }
  // async crearenote(){
  //   this.busy = true
  //   const notes = this.note
  //   // const desc = this.desc

  //   this.afstore.doc(`users/${this.user.getUID()}`).update({
  //     posts: firestore.FieldValue.arrayUnion(notes) // [{ แสดงรูป หรืออะไรก็ได้ในฟังชันนี้ }]
  //   })

  //   this.afstore.doc(`notes/${notes}`).set({
     
  //     author: this.user.getUsername(),
      

  //   })

  //   this.busy = false
  //   // this.note = ""
    
  //   this.router.navigate(['/tabs/feed'])

  // }

}