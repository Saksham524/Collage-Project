import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './gurd/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget password',
    component: ForgetPasswordComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: "admin",
    canActivate:[AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
