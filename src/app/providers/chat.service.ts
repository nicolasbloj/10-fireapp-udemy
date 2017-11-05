import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Chat } from '../model/chat.int';

@Injectable()
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<Chat>;

  chats: Chat[] = [];

  public user: any = {};

  constructor(private afs: AngularFirestore,
    private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log('User state ', user);
      if (!user) {
        return;
      } else {
        this.user.name = user.displayName;
        this.user.uid = user.uid;
      }
    });
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

  login(provider: string) {
    console.log(provider);
    switch (provider) {
      case 'google':
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        break;
      case 'twitter':
        this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
        break;

    }


  }

  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
  }

}
