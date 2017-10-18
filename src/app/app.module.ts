import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig =  {
  apiKey: "AIzaSyDY7oiFRTTjKwIVZmVtOulL6eI2PL6S-vo",
  authDomain: "firestoreangular.firebaseapp.com",
  databaseURL: "https://firestoreangular.firebaseio.com",
  projectId: "firestoreangular",
  storageBucket: "",
  messagingSenderId: "615740431094"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
