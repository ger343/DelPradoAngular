import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Video } from '../video.model';

@Injectable({
  providedIn: 'root'
  
})
export class VideoService {

  constructor(private angularFirestore: AngularFirestore) { }

  getVideo() {
    return this.angularFirestore
      .collection('video')
      .snapshotChanges();
  }

  getVideoById(id) {
    return this.angularFirestore
      .collection('video')
      .doc(id)
      .valueChanges()
  }
  createVideo(video: Video){
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
          .collection('video')
          .add(video)
          .then((response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          })
    })
  }
  deleteVideo(video){
    return this.angularFirestore
    .collection('video')
    .doc(video.id)
    .delete()
  }

}
