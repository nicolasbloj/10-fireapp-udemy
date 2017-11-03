import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    // nos ponemos pendiente de cambios del objeto items de firebase
    this.chats = db.collection('chats').valueChanges();
  }
}

