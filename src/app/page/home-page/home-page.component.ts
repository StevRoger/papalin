import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductDialogComponent} from "../component/product-dialog/product-dialog.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public _MatDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onOpenProductDialog(productId: string): void {
    const dialogRef = this._MatDialog.open(ProductDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
