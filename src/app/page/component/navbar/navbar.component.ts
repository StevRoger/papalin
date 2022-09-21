import {Component, HostListener, OnInit} from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {LoginComponent} from "../login/login.component";
import {SocialAuthService} from "angularx-social-login";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public scrollOffset: number = 0;
  public user: any;


  constructor(
    public _MatBottomSheet: MatBottomSheet,
    private _SocialAuthService: SocialAuthService,
    private _MatSnackBar: MatSnackBar,
  ) { }

  /** For scroll event */
  @HostListener('window:scroll', []) onWindowScroll(): void {
    this.scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('LOG_USER') as string);
    if(this.user) this.user.balance = 100;
    console.log('user =>', this.user);
  }

  onOpenLoginSheet(): void {
    const bottomSheetRef = this._MatBottomSheet.open(LoginComponent);
    bottomSheetRef.afterDismissed().subscribe((result) => {
      console.log('result =>', result);
      if (result && result.name) {
        this.user = JSON.parse(localStorage.getItem('LOG_USER') as string);
        this.user.balance = 100;
        this._MatSnackBar.open('Sign in successfully', 'Close');
      } else if (result === undefined) {

      } else {
        this._MatSnackBar.open('Failed to sign in!', 'Close');
      }
    });
  }

  onSignOut(): void {
    this._SocialAuthService.signOut().then((result) => {
      console.log('logout =>', result);
    });
  }

}
