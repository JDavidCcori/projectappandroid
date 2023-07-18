import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface User {
    uid: string;
    name: string;
    phonenumber: string;
    birth: Date;
    email: string;
    password: string
    foto: string;
    perfil: 'admin' | 'member'
}

//Converter necesario debido a que el datepicker contiene la fecha pero el el campo nacimiento el que se leerá y esribirá
export const userConverter = {
    toFirestore: (user: any) => {
        return <User>{
            name: user.name,
            phonenumber: user.phonenumber,
            birth: user.birth,
            email: user.email,
            password: user.password,
            foto: user.foto,
        };
    },
    fromFirestore: (snapshot: any , options:any ) => {
        const data = snapshot.data(options);
        return <User>{
            uid: snapshot.id,
            name: data.name,
            phonenumber: data.phonenumber,
            birth: data.birth.toDate(),
            email: data.email,
            password: data.password,
            foto: data.foto,
        }
    }
};