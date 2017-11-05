import { ChatService } from '../../providers/chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(public _chatService: ChatService) {
  }

  login(provider: string) {
    console.log(provider);
    this._chatService.login(provider);
  }
}
