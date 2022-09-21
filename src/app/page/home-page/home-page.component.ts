import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductDialogComponent} from "../component/product-dialog/product-dialog.component";
import {FirestoreDbService} from "../../shared/firestore-db.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  isLoadingProducts: boolean = true;

  constructor(
    public _MatDialog: MatDialog,
    public _FirestoreDbService: FirestoreDbService,
  ) { }

  ngOnInit(): void {
    this.onLoadCategories().then();
    this.onLoadProducts().then();
  }

  async onLoadProducts() {
    this.products = await this._FirestoreDbService.getRecords('products');
    console.log('products', this.products);
    this.isLoadingProducts = false;
  }

  async onLoadCategories() {
    this.categories = await this._FirestoreDbService.getRecords('categories');
    console.log('categories', this.categories);
  }

  onOpenProductDialog(productId: string): void {
    const dialogRef = this._MatDialog.open(ProductDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
