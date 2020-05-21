import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterial } from './angular.material';
import { appRoutes } from './app.route';

import { AppComponent } from './app.component';
import { FooterComponent } from './global/footer/footer.component';
import { HeaderComponent } from './global/header/header.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule, AngularMaterial,BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot (appRoutes)
  ],
  declarations: [
    AppComponent, FooterComponent, HeaderComponent, TicketComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }