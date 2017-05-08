import { Component,OnInit, OnDestroy,AfterViewInit } from '@angular/core';
import { ChatService } from './services/chat.service'; 
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy,AfterViewInit{
  messages:any[]=[];
  connection:any="";
  message:any="";
  ngOnInit(){
    this.connection = this.chatService.getMessages().subscribe(msg=>{
      
      this.messages.push(msg);
    });
  }
  ngOnDestroy(){
    this.connection.unsubscribe();
  }
  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = "";
  }
  constructor(private chatService:ChatService){}
  ngAfterViewInit(){
      $(function(){
            $("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
            });
  })
  }

}
