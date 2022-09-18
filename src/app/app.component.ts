import {Component, OnInit} from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {FirestoreDbService} from "./shared/firestore-db.service";

const firebaseConfig = {
  apiKey: "AIzaSyBibM158C5j6mR0QtbW6zM_CCRYr5Z1y_I",
  authDomain: "papalin-b9b1f.firebaseapp.com",
  projectId: "papalin-b9b1f",
  storageBucket: "papalin-b9b1f.appspot.com",
  messagingSenderId: "45327934544",
  appId: "1:45327934544:web:715295445e1c7cbeb91d55",
  measurementId: "G-FZ5829RZGB"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'linker';

  constructor(
    private db: FirestoreDbService
  ) {
  }

  ngOnInit(): void {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    this.getUsers().then();
  }

  async getUsers(): Promise<void> {
    const allUsers = await this.db.getAllUsers();
    console.log(allUsers);
  }

}
