import { AuthGuard } from './guards/auth.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
},
{
  path: 'dashboard',
    component: MainPageComponent,
    canActivate: [AuthGuard]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
