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
    this.chatsCollection = this.afs.collection<Chat>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    return this.chatsCollection.valueChanges()
      .map((chats: Chat[]) => {
        console.log('chat ', chats);
        // this.chats = chats;
        this.chats = [];

        // for of
        for (const chat of chats) {
          this.chats.unshift(chat);
          // siempre inserto en la primera posicion con unshift, generando una pila
          // importante para el orden de los mensajes
        }
      });


  }

  addChat(chat: Chat): Promise<any> {
    return this.chatsCollection.add(chat);
  }

}
