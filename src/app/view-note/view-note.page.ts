// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-view-note',
//   templateUrl: './view-note.page.html',
//   styleUrls: ['./view-note.page.scss'],
// })
// export class ViewNotePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Note } from '../model/Note';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.page.html',
  styleUrls: ['./view-note.page.scss'],
})
export class ViewNotePage implements OnInit, AfterViewInit {
  note: Note = {
    id: '',
    title: '',
    content: '',
    createdAt: '',
    author: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private fbService: FirebaseService, private router: Router) { }

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

  deleteNote() {
    this.fbService.deleteNote(this.note.id).then(() => {
      this.router.navigateByUrl('/tabs/feed');
    }, err => {
    });
  }

}