import { Component, OnInit } from '@angular/core';
import {FirestoreDbService} from "../../shared/firestore-db.service";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  users: any[] = [];
  isLoadingProducts: boolean = true;
  isLoadingCategories: boolean = true;
  isLoadingUsers: boolean = true;

  constructor(
    public _FirestoreDbService: FirestoreDbService,
  ) { }

  ngOnInit(): void {
    this.onLoadCategories().then();
    this.onLoadProducts().then();
    this.onLoadUsers().then();
  }

  async onLoadCategories() {
    this.categories = await this._FirestoreDbService.getRecords('categories');
    this.categories.sort((a, b) => (a.ordering > b.ordering) ? 1 : -1);
    console.log('categories', this.categories);
    this.isLoadingCategories = false;
  }

  async onLoadProducts() {
    this.products = await this._FirestoreDbService.getRecords('products');
    console.log('products', this.products);
    this.isLoadingProducts = false;
  }
  async onLoadUsers() {
    this.users = await this._FirestoreDbService.getRecords('users');
    console.log('users', this.users);
    this.isLoadingUsers = false;
  }

}
