import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FirestoreDbService} from "../../../shared/firestore-db.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _SocialAuthService: SocialAuthService,
    private _MatBottomSheet: MatBottomSheet,
    private _FirestoreDbService: FirestoreDbService,
  ) { }

  ngOnInit(): void {
  }

  signInWithFB(): void {
    this._SocialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.removeItem('LOG_USER');
      localStorage.setItem('LOG_USER', JSON.stringify(user));
      this._MatBottomSheet.dismiss(user);
    }, (err) => {
      this._MatBottomSheet.dismiss({status: 'ERROR'});
    });
  }

  signInWithGoogle(): void {
    this._SocialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      localStorage.removeItem('LOG_USER');
      localStorage.setItem('LOG_USER', JSON.stringify(user));
      this._MatBottomSheet.dismiss(user);
    }, (err) => {
      this._MatBottomSheet.dismiss({status: 'ERROR'});
    });
  }

  registerNewUser(): void {
    const record: any = {
      id: 'idtest',
      name: 'Kaka',
      email: 'test@gmail.com'
    }
    this._FirestoreDbService.addNewUser(record).then();
  }
}
