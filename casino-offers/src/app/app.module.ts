import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxOffersCardGjorgievskaEmilijaModule } from 'ngx-offers-card-gjorgievska-emilija';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxOffersCardGjorgievskaEmilijaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
