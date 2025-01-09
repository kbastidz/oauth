import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RqUsuario, RsTrxService, Usuario, Util } from '@oauth/shared-config';
import { InputTextModule } from 'primeng/inputtext';
//import { RegisterDialogComponent } from 'libs/login/src/lib/login/register-dialog/register-dialog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { LoginService, RegisterDialogComponent } from '@oauth/login';
//import { LoginService } from 'libs/login/src/lib/login/login.service';

@Component({
  selector: 'app-actualizar-informacion',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    RouterModule, RegisterDialogComponent],
  templateUrl: './actualizar-informacion.component.html'
})
export class ActualizarInformacionComponent {
  util: Util = new Util();
  listUsuario!: Usuario[];
  model: RqUsuario = new RqUsuario();  
  usuario: Usuario = new Usuario();  
  onPerson: boolean = false;
  onPassword: boolean = false;
  onUnclok: boolean = false;

  constructor(private serv: LoginService) {  }

  ngOnInit() {
    
  }

  //Ref.8 Recordar Contraseña
  btnEnvTrxRemember(): void {
    this.serv.envRecordarTransaction(this.model).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.onPassword = false;
    this.limpiar();
  }

  //Ref.9 Desbloquear Usuario
  btnEnvTrxUnlock(): void {
    this.serv.envDesbloquearTransaction(this.model).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.onUnclok = false;
    this.limpiar();
  }

  conf(res: RsTrxService): void {
      this.limpiar();
      this.util.validResponse(res);
  }

  limpiar(): void {
    this.model = new RqUsuario();
  }

 
}