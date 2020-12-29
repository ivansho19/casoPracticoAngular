export interface ILoginObject {
  Result: Result;
  Code: number;
  Message: string;
}

export interface Result {
  usuario: Usuario;
  token: string;
}

export interface Usuario {
  idUsuario: number;
  codUsuario: string;
  nombreUsuario: string;
  correoElectronico: string;
}