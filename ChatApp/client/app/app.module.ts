import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { MessagingModule } from './messaging/messaging.module'; 

@NgModule({
  imports: [ BrowserModule,

    MessagingModule 
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
