export class Persona {
    id: number;
    //idUsuario: number;
    nombres: string;
    primerApellido: string;
    segundoApellido: string;
    cedula: string;
    telefono: string;
    email: string;
    direccion: string;
    contacto: string;
    pais: string;
    //user: Usuario;

    constructor(
        id: number = 0,
        idUsuario: number = 0,
        nombres: string = '',
        primerApellido: string = '',
        segundoApellido: string = '',
        cedula: string = '',
        telefono: string = '',
        email: string = '',
        direccion: string = '',
        contacto: string = '',
        pais: string = ''
    ) {
        this.id = id;
        //this.idUsuario = idUsuario;
        this.nombres = nombres;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.cedula = cedula;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.contacto = contacto;
        this.pais = pais;
        //this.user = new Usuario();
    }
}

export class Usuario {
    id: number;
    username: string;
    contrasenia: string;
    rol: string;
    estado: string;
    persona: Persona;
    idPersona: number;
    constructor() {
        this.id = 0;
        this.username = '';
        this.contrasenia = '';
        this.rol = '';
        this.estado  = 'A';
        this.idPersona = 0;
        this.persona = new Persona();
        
    }
}