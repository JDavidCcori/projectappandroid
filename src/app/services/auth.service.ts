import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User, userConverter } from '../models/users.model';
import { UserI } from '../models/userI.model';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, signInWithPopup, 
  GoogleAuthProvider, 
  FacebookAuthProvider
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  orderBy,
  getDoc,
  deleteDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private authfirebase: AngularFireAuth,
    private _fireStore: Firestore,
    private auth: Auth
  ) {}

  async create(user: User): Promise<void> {
    try {
      const usersRef = collection(this._fireStore, 'users');

      await setDoc(doc(usersRef), {
        name: user.name,
        email: user.email,
        phonenumber: user.phonenumber,
        foto: user.foto,
        birth: user.birth,
        password: user.password,
        perfil: user.perfil,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async getAll(): Promise<User[]> {
    const users: User[] = [];
    const q = query(
      collection(this._fireStore, 'users'),
      orderBy('name')
    ).withConverter(userConverter);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  }

  async getById(uid: string): Promise<User> {
    const q = doc(this._fireStore, 'users', uid).withConverter(userConverter);
    const querySnapshot = await getDoc(q);
    return querySnapshot.data()!;
  }

  async update(user: User) {
    await setDoc(
      doc(this._fireStore, 'users', user.uid).withConverter(userConverter),
      user
    );
  }

  async removeById(uid: string) {
    await deleteDoc(doc(this._fireStore, 'users', uid));
  }

  async getByNome(name: string): Promise<User[]> {
    const users: User[] = await this.getAll();

    if (!name) {
      return users;
    }

    return users.filter((user) =>
      user.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
  login(correo: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(correo, password);
  }

  logut() {
    this.authfirebase.signOut();
  }

  register(datos: UserI) {
    return createUserWithEmailAndPassword(this.auth,
      datos.correo,
      datos.password
    );
  }

  stateUser() {
    return this.authfirebase.authState;
  }

  async getUid() {
    const user = await this.authfirebase.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  loginWithFacebook() {
    return signInWithPopup(this.auth, new FacebookAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
