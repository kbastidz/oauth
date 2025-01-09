import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, HttpUtil, Persona, RqUsuario, RsTrxService, Usuario } from '@oauth/shared-config';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginService {
    private endPoint = environment.endPointOTC;

    constructor(private http:HttpClient, private httpService: HttpUtil) {}

    envLoginTransaction(modelo:RqUsuario):Observable<RsTrxService>{        
        return this.http.post<RsTrxService>(`${this.endPoint}validateLogin`, modelo);
    }

    envRecordarTransaction(modelo:RqUsuario):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}rememberPassword`, modelo);
    }

    envDesbloquearTransaction(modelo:RqUsuario):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}unlockUser`, modelo);
    }

    envRegistarTransaction(modelo:Usuario):Observable<RsTrxService>{
        return this.httpService.post<RsTrxService>(`${this.endPoint}registerUser`, modelo);
    }
}