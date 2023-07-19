export  interface Estudiante {
    nombre: string;
    apellido: string;
    edad: number;
    sexo: 'M' | 'F';
    cedula: string;
}

export interface UserI {
  nombre: string;
  correo: string;
  uid?: string;
  password: string;
  birth: Date;
  perfil: 'cliente'| 'admin';
}

export interface authUser{
  email:string;
  password:string;
}