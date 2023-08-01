export  interface Estudiante {
    nombre: string;
    apellido: string;
    edad: number;
    sexo: 'M' | 'F';
    cedula: string;
}

export interface UserI {
  nombre: string;
  apellidos: string;
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

export interface BlogI {
  title: string;
  description: string;
  image: string;
  mapa: string;
  uid?: string;
  date: Date;
}