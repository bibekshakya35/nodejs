import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
declare var $: any;
@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit, AfterViewInit, OnDestroy {
  currentUser =Math.random();
  messages: any[] = [];
  connection: any = "";
  message: any = "";
  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(msg => {
      console.log(msg);
      this.messages.push(msg);
    });
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
  sendMessage() {
    this.chatService.sendMessage(this.message, this.currentUser);
    this.message = "";
  }
  constructor(private chatService: ChatService) { }
  ngAfterViewInit() {

  }

}
