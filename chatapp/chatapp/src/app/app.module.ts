import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ChatService} from './services/chat.service';
import { AppComponent } from './app.component';
import { UserRoomComponent } from './pages/user-room/user-room.component';
import { routing } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    UserRoomComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,routing
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
