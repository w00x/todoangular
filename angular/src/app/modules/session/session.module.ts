import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../../guard/auth.guard';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {
    path: 'login', component: LoginLayoutComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'account', component: AccountComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  declarations: [
    LoginComponent,
    LoginLayoutComponent,
    AccountComponent
  ]
})
export class SessionModule { }
