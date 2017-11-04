import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<any>;
  chats: any[] = [];

  constructor(private afs: AngularFirestore) {
  }

  loadMessages(): Observable<any[]> {
    this.chatsCollection = this.afs.collection<any>('chats');
    return this.chatsCollection.valueChanges();
  }
  addChat(chat: any) {
    this.chatsCollection.add(chat);
  }

}
