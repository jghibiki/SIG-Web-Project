import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MessagingComponent } from './messaging.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  declarations: [ MessagingComponent ],
  exports: [ MessagingComponent ],
  bootstrap: [ ]
})
export class MessagingModule { }
