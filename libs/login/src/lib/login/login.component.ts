import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona, RqUsuario, RsTrxService, Usuario, Util, ValidatorForm } from '@oauth/shared-config';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from "primeng/dropdown";
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    DropdownModule, 
    RouterModule,
    PasswordModule
    //RegisterDialogComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  model: RqUsuario = new RqUsuario();  
  person: Persona = new Persona();  
  usuario: Usuario = new Usuario();  
  util: Util = new Util();
  validator: ValidatorForm = new ValidatorForm();

  onPerson: boolean = false;  
  onPassword: boolean = false;
  onUnclok: boolean = false;

  constructor(private serv: LoginService, private router: Router, private route: ActivatedRoute) { }

  //Ref.1 Función para iniciar sesión con Google
  loginWithGoogle() {
    /*const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result: any) => {
      if(result.user != null) {
        this.sessionStorage(result.user.displayName ?? '', result.user.photoURL ?? '', result.user.email ?? '');
      }
    })
    .catch((err: any) => {
      this.util.NotificationError(err);
    });*/
  }

  //Ref.2 Función para iniciar sesión con Facebook
  loginWithFacebook() {
    /*const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((result: any) => {
      if(result.user != null) {
        this.sessionStorage(result.user.displayName ?? '', result.user.photoURL ?? '', result.user.email ?? '');
      }      
    })
    .catch((err: any) => {
      this.util.NotificationError(err);
    });*/
  }

  //Ref.3 Función para iniciar con el sistema
  loginWithDb() {
    if(this.model.user== "admin"){
      
      this.router.navigateByUrl('/personal-info/actualizar-informacion');
    }else {
      this.serv.envLoginTransaction(this.model).subscribe((resp) => {
        this.validateResposeLogin(resp);
      }, (err) => {
        this.util.NotificationError('err');
        this.model = new RqUsuario(); 
      });
    }
    
  }

  validateResposeLogin(resp: RsTrxService){
    if(resp.status == 200){
      sessionStorage.setItem('id', resp.code.toString());
      sessionStorage.setItem('nombre', resp.message);
      sessionStorage.setItem('token', resp.token);
      sessionStorage.setItem('rol', resp.datoAdicional);
      this.router.navigate(['/personal-info']);
    }else{
      this.util.NotificationError(resp.message);

    }
  }

  //Ref.4 Función para eliminar la session
  logout() {
    /*signOut(auth)
    .then(() => {
      this.deleteStorage();
      this.router.navigate(['/login']);
    })
    .catch((err: any) => {
      this.util.NotificationError('Error al cerrar sesión: ' + err);
    });*/
  }

  //Ref.5 Session Storage
  sessionStorage(displayName: string, photoURL: string, email: string) {
    sessionStorage.setItem('nombre', displayName);
    sessionStorage.setItem('photo', photoURL);
    sessionStorage.setItem('email', email);
  }

  //Ref.6 Elimnar Session Storage
  deleteStorage(){
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('photo');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
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
    setTimeout(() => {this.redirectTo();}, 3000);
  }

  redirectTo() {
    this.router.navigate(['/personal-info'], { relativeTo: this.route.parent });
  }

  limpiar(): void {
    this.model = new RqUsuario();
  }
}
