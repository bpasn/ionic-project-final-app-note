import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { UserService } from '../user.service';
// import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {


postID: string
post

  heartType: string ="heart-outline"

  constructor(private route: ActivatedRoute , private afs: AngularFirestore ,
    public router: Router, ) {
   
   }

  ngOnInit() { 
    this.postID = this.route.snapshot.paramMap.get("id")
    this.post = this.afs.doc(`posts/${this.postID}`).valueChanges()
  }

  toggleHeart(){
    this.heartType = this.heartType == "heart-outline" ? "heart" : "heart-outline"
  }

  // deletePost(){
  //   this.afs.img(this.postID)
  // }

  
}
