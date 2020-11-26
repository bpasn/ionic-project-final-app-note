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
    author: this.user.getUsername(),
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


}