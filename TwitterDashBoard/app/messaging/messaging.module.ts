import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdToolbarModule } from '@angular2-material/toolbar';

import { MessagingComponent } from './messaging.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,

    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdToolbarModule.forRoot(),
  ],
  declarations: [ MessagingComponent ],
  exports: [ MessagingComponent ],
  bootstrap: [ ]
})
export class MessagingModule { }
