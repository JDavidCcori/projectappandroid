import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface Blog {
    blogid: string;
    title: string;
    content: string;
    fecha: Date;
    foto: string;
}

//Converter necesario debido a que el datepicker contiene la fecha pero el el campo nacimiento el que se leerá y esribirá
export const blogConverter = {
    toFirestore: (blog: any) => {
        return <Blog>{
            title: blog.title,
            content: blog.content,
            fecha: blog.fecha,
            foto: blog.foto,
        };
    },
    fromFirestore: (snapshot: any , options:any ) => {
        const data = snapshot.data(options);
        return <Blog>{
            blogid: snapshot.id,
            title: data.title,
            content: data.content,
            fecha: data.fecha.toDate(),
            foto: data.foto,
        }
    }
};