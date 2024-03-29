import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'auth'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
