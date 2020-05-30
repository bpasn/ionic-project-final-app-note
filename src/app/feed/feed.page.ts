import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/Note';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  private notes: Observable<Note[]>;

  constructor(private fbService: FirebaseService) { }

  ngOnInit(): void{
    this.notes = this.fbService.getNotes();
  }

}
