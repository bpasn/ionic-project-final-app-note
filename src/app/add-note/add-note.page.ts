import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Note } from '../model/Note';
import { FirebaseService } from '../service/firebase.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private fbService: FirebaseService,
    private toastCtrl: ToastController,
    private router: Router
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