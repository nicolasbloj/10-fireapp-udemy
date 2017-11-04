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
    this._chatService.loadChats().subscribe();
  }

  send(): void {
    if (this.message.length > 0) {
      this._chatService.addChat({ name: 'nicolas', message: this.message, date: new Date().getTime() })
        .then( ( data ) => { console.log('Mensaje enviado, Data ', data); this.message = ''; })
        .catch(e => console.error('Error ', e));
    }
  }
}
