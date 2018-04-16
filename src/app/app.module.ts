import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ErrorBlockComponent } from './error-block/error-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorBlockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
