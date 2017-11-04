import { ChatService } from '../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  message = '';

  constructor(public _chatService: ChatService) {
    this._chatService.loadMessages().subscribe(
      (messages: any[]) => {
        console.log('messages ', messages);
      }
    );
  }

  sendMessage(): void {
    console.log('message', this.message);
  }
}
