export class RsTrxService  {
    status?: number;
    code: number;
    message: string;
    token: string;
    datoAdicional: string;
    constructor() {
        this.code = 0;
        this.message = '';
        this.token = "";
        this.datoAdicional = "";
    }
}