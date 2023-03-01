import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

const routes: Routes = [
  {path:'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'view-solutions/:questionid', component: SolutionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
