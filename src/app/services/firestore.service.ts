import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  createDoc(data: any, path: string, id: string, Id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }
  createDocU(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getId() {
    return this.firestore.createId();
  }

  getCollection<tipo>(path: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();

  }

  getDoc<tipo>(path: string, id: string) {
   return this.firestore.collection(path).doc<tipo>(id).valueChanges()
  }

  updateDoc(path: string, id: string, data: any) {
    return  this.firestore.collection(path).doc(id).update(data);
  }

  deleteDoc(path: string, id: string){
    return this.firestore.collection(path).doc(id).delete();
  }
}