import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { Observable } from 'rxjs';
// import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Note } from './model/Note';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

interface user {
    username: string,
    uid: string
    
}

@Injectable()
export class UserService {

    private user: user
    private noteCollection: AngularFirestoreCollection;
 
  

   
    
    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {

      
    }

   

    setUser(user: user) {
        this.user = user
    }

    getUsername(): string {
        return this.user.username
    }

    

   async isAuthenticated(){
        if(this.user) return true

        const user = await this.afAuth.authState.pipe(first()).toPromise()

            if(user ) {
                this.setUser({
                    username: user.email.split('@')[0],
                    uid: user.uid
                })

                return true
            }

            return false
    
    }


    getUID(): string {
      return this.user.uid
    }

    // deletePost(id: string): Promise<void> {
    //     return this.noteCollection.doc(id).delete();
    // }

}