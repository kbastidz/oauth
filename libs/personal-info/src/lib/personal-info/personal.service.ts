import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, HttpUtil, Usuario, RsTrxService } from '@oauth/shared-config';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PersonalService {
  private endPoint = environment.endPointOTC;

  constructor(private httpService: HttpUtil) {}

  envActualizarTransaction(modelo:Usuario):Observable<RsTrxService>{
    return this.httpService.put<RsTrxService>(`${this.endPoint}updateUser`, modelo);
  }
  
  envConsultTransactionUserId(id:number):Observable<Usuario[]>{
    return this.httpService.get<Usuario[]>(`${this.endPoint}consultPersonId/${id}`);
  }
    
}