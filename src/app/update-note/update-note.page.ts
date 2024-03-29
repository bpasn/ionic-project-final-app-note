
//CODE ต้นฉบับ
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-update-note',
//   templateUrl: './update-note.page.html',
//   styleUrls: ['./update-note.page.scss'],
// })
// export class UpdateNotePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Note } from '../model/Note';
import { ActivatedRoute, Router } from '@angular/router';


import { FirebaseService } from '../service/firebase.service';


@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit, AfterViewInit {
  note: Note = {
    id: '',
    title: '',
    content: '',
    createdAt: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.fbService.getNote(id).subscribe(noteData => {
        this.note = noteData;
      });
    }
  }

  updateNote() {
    this.fbService.updateNote(this.note).then(() => {
      this.router.navigate(['/tabs/feed']);
    }, err => {
    });
  }
}