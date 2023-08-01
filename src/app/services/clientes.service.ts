import { Injectable } from '@angular/core';
import { User, userConverter } from '../models/users.model';
import { Firestore, collection, getDocs, setDoc, doc, query, orderBy, getDoc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ClientesService {
    constructor(
        private _fireStore: Firestore,
    ) {
    }

    async create(cliente: User): Promise<void> {
        try {
            const clientesRef = collection(this._fireStore, "Clientes");

            await setDoc(doc(clientesRef), 
            {
                name: cliente.name,
                phonenumber: cliente.phonenumber,
                birth: cliente.birth,
                email: cliente.email,
                password: cliente.password,
                foto: cliente.foto,
            } );
        } catch (e) {
            console.error(e);
        }
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
        const q = doc(this._fireStore, "Clientes", uid).withConverter(userConverter);
        const querySnapshot = await getDoc(q);
        return querySnapshot.data()!;
    }

    async update(cliente: User) {
        await setDoc(doc(this._fireStore, "Clientes", cliente.uid).
            withConverter(userConverter), cliente);
    }

    async removeById(uid: string) {
        await deleteDoc(doc(this._fireStore, "Clientes", uid));
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