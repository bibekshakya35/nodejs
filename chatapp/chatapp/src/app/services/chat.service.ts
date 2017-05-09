import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = "http://localhost:8080";
  private socket;

  sendMessage(message, currentUser) {
    this.socket.emit("add-message", message, currentUser);
  }

  getMessages() {
    let $obs = new Observable(obser => {
      this.socket = io(this.url);
      this.socket.emit("adduser", { "room": 123, "username": Math.random   });
      this.socket.on('message', (data) => {
        obser.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });

    return $obs;
  }
  constructor() { }

}
