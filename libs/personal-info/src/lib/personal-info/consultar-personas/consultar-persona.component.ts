import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Usuario, Util } from '@oauth/shared-config';
import { PersonalService } from '../personal.service';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-personas',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule,InputTextModule],
  templateUrl: './consultar-persona.component.html'
})
export class ConsultarPersonasComponent {
  util: Util = new Util();
  listUsuario!: Usuario[];
  usuario: Usuario = new Usuario();  
  constructor(private serv: PersonalService, private router: Router) {  }

  ngOnInit() {
    this.envConsultUsuarios();
  }

  envConsultUsuarios(): void {
    this.serv.envConsultTransactionUserId(0).subscribe({next: (resp) => {
      this.listUsuario = resp;
      console.log(this.listUsuario);
    }});
  }

  btnEnvInactiveRequest(id: number){
    const modelo = this.listUsuario?.find(item => item.id === id);
    if (modelo) {
      modelo.estado = 'I';
      this.serv.envActualizarTransaction(modelo).subscribe((res) =>{
        (res.status == 200)  ?  this.util.validResponse(res) : this.util.NotificationError(res.message);
      },(err: any) => {
        this.util.NotificationError('Lo sentimos. : ' + err);
      });  
    }      
  }

  btnEnvEditRequest(id: number){
    this.router.navigate(['/personal-info', id]);
    
  }

}
