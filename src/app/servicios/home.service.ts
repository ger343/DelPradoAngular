import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Home } from '../home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private angularFirestore: AngularFirestore) { }

  //*** Métodos para el CRUD ***//
  getHome() {
    return this.angularFirestore
      .collection('home')
      .snapshotChanges();
  }

  getHomeById(id) {
    return this.angularFirestore
      .collection('home')
      .doc(id)
      .valueChanges()
  }
  updateDatos(home: Home, id) {
    return this.angularFirestore
      .collection('home')
      .doc(id)
      .update({

        imghome: home.imghome,

        textohome: home.textohome

      })
  }

}
