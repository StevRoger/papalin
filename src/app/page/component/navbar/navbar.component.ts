import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public scrollOffset: number = 0;

  constructor() { }

  /** For scroll event */
  @HostListener('window:scroll', []) onWindowScroll(): void {
    this.scrollOffset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  ngOnInit(): void {
  }

}
