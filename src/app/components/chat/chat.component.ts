import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, AfterViewChecked {

  message = '';
  sending = false;
  element: any;
  element2: any;

  constructor(public _chatService: ChatService) {
    this._chatService.loadChats().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    // para manejar la posicion de scroll 
    this.element = document.getElementById('app-messages');
    // para manejar foco en input
    this.element2 = document.getElementById('message');
    console.log(this.element2);
  }
  ngAfterViewChecked() {
    this.element2.focus();
  }
  send(): void {
    if (this.message.length > 0) {
      this.sending = true;
      this._chatService.addChat({ name: 'nicolas', message: this.message, date: new Date().getTime() })
        .then((data) => {
          console.log('Mensaje enviado, Data ', data);
          this.message = '';
          this.sending = false;
        })
        .catch((e) => { console.error('Error ', e); this.sending = false; });
    }
  }


}
