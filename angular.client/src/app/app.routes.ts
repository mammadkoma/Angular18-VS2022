import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent }
];
