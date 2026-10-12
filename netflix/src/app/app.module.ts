import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiantvcomediesComponent } from './navigatingcomponents/indiantvcomedies/indiantvcomedies.component';
import { KdramasComponent } from './navigatingcomponents/kdramas/kdramas.component';
import {HttpClientModule} from '@angular/common/http';
import { ThrillermoviesComponent } from './navigatingcomponents/thrillermovies/thrillermovies.component';
@NgModule({
  declarations: [
    AppComponent,
    IndiantvcomediesComponent,
    KdramasComponent,
    ThrillermoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
