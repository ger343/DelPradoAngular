import { Injectable } from '@angular/core';

import{ AngularFirestore } from '@angular/fire/compat/firestore';
import { Datos } from '../datos.model';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private angularFirestore: AngularFirestore) { }

  //*** Métodos para el CRUD ***//
  getDatos(){
    return this.angularFirestore  
               .collection('datos') 
               .snapshotChanges();
  }

  getDatosById(id){
    return this.angularFirestore
               .collection('datos')
               .doc(id)
               .valueChanges()
  }

  createDatos(post: Datos){
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
          .collection('datos')
          .add(Datos)
          .then((response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          })
    })
  }

  updateDatos(datos: Datos, id){
    return this.angularFirestore
               .collection('datos')  
               .doc(id)
               .update({
                descripcionvideo: datos.descripcionvideo,
                imgabout: datos.imgabout,
                imghome: datos.imghome,
                linkvideo: datos.linkvideo,
                textoabout: datos.textoabout,
                textohome: datos.textohome,
                titulovideo: datos.titulovideo
               })
  }

  deleteDatos(datos){
    return this.angularFirestore
    .collection('datos')
    .doc(datos.id)
    .delete()
  }
}
