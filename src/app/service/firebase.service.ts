
//ไฟล์ NOTE คำสั่ง รับขส่งค่า


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/Note';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take, filter } from 'rxjs/operators';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  private notes: Observable<Note[]>;
  private noteCollection: AngularFirestoreCollection<Note>;

  constructor(
    private afs: AngularFirestore,
    public user: UserService
  ) {

    this.noteCollection = this.afs.collection<Note>('notes');
    this.notes = this.noteCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }).filter(item=>item.author === this.user.getUsername());
      })
    );
  }

  getNotes(): Observable<Note[]> {
    return this.notes
  }

  getNote(id: string): Observable<Note> {
    return this.noteCollection.doc<Note>(id).valueChanges().pipe(
      take(1),
      map(note => {
        note.id = id;
        return note;
      })
    );
  }

  addNote(note: Note): Promise<DocumentReference> {
    return new Promise(async(resolve, reject) => {
      try {
        const res = await this.noteCollection.add(note);
        this.afs.doc(`users/${this.user.getUID()}`).update({
          notes: firestore.FieldValue.arrayUnion(res.id)
        })
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }

  updateNote(note: Note): Promise<void> {
    return this.noteCollection.doc(note.id).update({ title: note.title, content: note.content, createdAt: note.createdAt });
  }

  deleteNote(id: string): Promise<void> {
    return this.noteCollection.doc(id).delete();
  }
  
}