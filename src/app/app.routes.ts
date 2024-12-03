import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.page';
import { NotFoundComponent } from './pages/NotFound/notfound.page';
import { LoginComponent } from './pages/Login/login.page';
import { RegisterComponent } from './pages/Register/register.page';
import { DetailComponent } from './pages/Detail/detail.page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: NotFoundComponent },
];
