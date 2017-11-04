import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Chat } from '../model/chat.int';

@Injectable()
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<Chat>;

  chats: Chat[] = [];

  constructor(private afs: AngularFirestore) {
  }

  loadChats() {
    this.chatsCollection = this.afs.collection<Chat>('chats');
    return this.chatsCollection.valueChanges()
      .map((chats: Chat[]) => { console.log('chat ', chats); this.chats = chats; });

  }

  addChat(chat: Chat): Promise<any> {
    return this.chatsCollection.add(chat);
  }

}
