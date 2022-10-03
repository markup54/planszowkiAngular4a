import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SzczegolyComponent } from './szczegoly/szczegoly.component';
import { FormularzComponent } from './formularz/formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    SzczegolyComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
