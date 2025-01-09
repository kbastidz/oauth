export class RqUsuario {
    user: string;
    contrasenia: string;
    rol: string;
    pais: string;
    estado: string;
    
    constructor(
        user: string = '',
        contrasenia: string = '',
        rol: string = '',
        estado: string = '',
        pais: string = ''
      ) {
        this.user = user;
        this.contrasenia = contrasenia;
        this.rol = rol;
        this.estado = estado;
        this.pais = pais;
      }
}

export class RspUsuario {
    nombre: string;
    id: number;
    
    constructor() {
        this.nombre = '';
        this.id = 0;
    }
}