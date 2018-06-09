import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { TapComponent } from './tap/tap.component';
import { ScoresComponent } from './scores/scores.component';
import { LogoutComponent } from './logout/logout.component';
import { UsernameComponent } from './tap/username/username.component';

const appRoutes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'tap', component: TapComponent},
  {path: 'scores', component: ScoresComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent,
    TapComponent,
    ScoresComponent,
    LogoutComponent,
    UsernameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
