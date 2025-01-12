import { Route } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ActualizarInformacionComponent, ConsultarPersonasComponent, PersonalInfoComponent } from '@oauth/personal-info';
import { LoginComponent } from "@oauth/login"
import { DashboardMlComponent, DashboardMlRhComponent } from '@oauth/dashboard-ml';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  /*{
    path: '**',
    redirectTo: '/notfound',
  },*/
  {
    path: 'personal-info',    
    component: AppLayoutComponent,
    children: [
      { path: '', component: PersonalInfoComponent },      
      { path: 'consultar-personas', component: ConsultarPersonasComponent },
      { path: 'actualizar-informacion', component: ActualizarInformacionComponent},
      { path: ':id', component: PersonalInfoComponent },
    ],
  },
  {
    path: 'dashboard-ml',
    component: AppLayoutComponent,
    children: [
      { path: '', component: DashboardMlComponent },
      { path: 'dashboard-ml-rh', component: DashboardMlRhComponent },
    ]
  }
];
