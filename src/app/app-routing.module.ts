import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {path:'', component : HomeComponent}, 
  {path:'login', component: LoginComponent},
  {path:'signUp', component: RegisterComponent},
  {path:'Rules', component: RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
