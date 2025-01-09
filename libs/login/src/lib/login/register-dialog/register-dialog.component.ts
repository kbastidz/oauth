import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from "primeng/dropdown";
import { Usuario, Util, ValidatorForm } from '@oauth/shared-config';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [CommonModule,ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    RouterModule],
  templateUrl: './register-dialog.component.html'
})
export class RegisterDialogComponent {
  //@Input() person: Persona = new Persona();
  @Input() usuario: Usuario = new Usuario();
  @Input() visible: boolean = false; 
  @Output() onPersonChange = new EventEmitter<boolean>();
  
  util: Util = new Util();
  validator: ValidatorForm = new ValidatorForm();

  itemsPaises = [{ name: 'Ecuador', code: 'Ecuador' }];

  itemsRoles = [
    { name: 'admin', code: 'Admin' },
    { name: 'rrhh', code: 'Recursos Humanos' },
    { name: 'marketing', code: 'Marketing' }
  ]
  constructor(private serv: LoginService) {}

  closeDialog() {
    this.onPersonChange.emit(false);
  }

   //Ref.7 Registrar Person
  btnEnvRequest(): void {   
    this.serv.envRegistarTransaction(this.usuario).subscribe((res) => {
      (res.status == 200)  ? this.conf(res) : this.util.NotificationError(res.message);
    },() => {
      this.util.NotificationError('err');
    });
    this.closeDialog();
  }

  conf(res: any): void {
    this.util.validResponse(res);
    this.closeDialog();
  }
}
