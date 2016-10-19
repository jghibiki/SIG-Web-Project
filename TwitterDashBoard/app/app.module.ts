import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';


import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule,

    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdToolbarModule.forRoot(),

  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
