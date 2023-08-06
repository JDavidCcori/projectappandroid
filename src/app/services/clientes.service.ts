import { Injectable } from '@angular/core';
import { User, userConverter } from '../models/users.model';
import { Firestore, collection, getDocs, setDoc, doc, query, orderBy, getDoc, deleteDoc } from '@angular/fire/firestore';
import { UserI } from '../models/userI.model';
@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor(
        private _fireStore: Firestore,
    ) {
    }

    async getAll(): Promise<User[]> {
        const clientes: User[] = [];
        const q = query(collection(this._fireStore, "Clientes"), 
        orderBy("name")).withConverter(userConverter);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            clientes.push(doc.data());
        });
        return clientes;
    }

    async getById(uid: string): Promise<User> {
        const q = doc(this._fireStore, "Usuarios", uid).withConverter(userConverter);
        const querySnapshot = await getDoc(q);
        return querySnapshot.data()!;
    }

    async update(cliente: User) {
        await setDoc(doc(this._fireStore, "Usuarios", cliente.uid).
            withConverter(userConverter), cliente);
    }

    async removeById(uid: string) {
        await deleteDoc(doc(this._fireStore, "Usuarios", uid));
    }

    async getByNome(nombre: string): Promise<User[]> {
        const clientes: User[] = await this.getAll();

        if (!nombre) {
            return clientes;
        }

        return clientes.filter(
            cliente => cliente.name.toLowerCase().startsWith(nombre.toLowerCase()));
    }
}