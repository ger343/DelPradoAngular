import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { About } from 'src/app/about.model';
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  updatePost(value: any, id: string) {
    throw new Error('Method not implemented.');
  }
  getaboutById(id: string) {
    throw new Error('Method not implemented.');
  }
  createAbout: any;

  constructor(private angularFirestore: AngularFirestore) { }

  //*** Métodos para el CRUD ***//
  getAbout() {
    return this.angularFirestore
      .collection('about')
      .snapshotChanges();
  }

  getAboutById(id) {
    return this.angularFirestore
      .collection('about')
      .doc(id)
      .valueChanges()
  }
  updateDatos(about: About, id) {
    return this.angularFirestore
      .collection('about')
      .doc(id)
      .update({

        imgabout: about.imgabout,

        textoabout: about.textoabout

      })
  }

  
}
