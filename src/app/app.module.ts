import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'



import { AppComponent } from './app.component';

import {ReversePipe} from './check.pipe'
import {DeletePipe} from './Duplicate.pipe'
@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    DeletePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
